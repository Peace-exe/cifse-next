import mongoose, { Schema, Document, Model } from "mongoose";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import Session from "./session";
export interface UserInterface extends Document{
    name:string;
    email:string;
    passwordHash:string;
    createdAt:Date;
    validatePassword(passwordInputByUser:string): Promise<boolean>;
}

const userSchema = new Schema<UserInterface>({
    name:{
        type:String,
        trim:true,
        maxLength:20,
        minLength:[1,'name field cannot be empty'],
        required:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:true,
        validate(value:string){
            if(!validator.isEmail(value)){
                throw new Error("invalid email format: "+value);
            }
        }
    },
    passwordHash:{
        type:String,
        trim:true,
        required:true,
        select:false,
        validate(value:string){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong password.\n" + "Password must contain minimum 8 characters,1 lowercase ,1 uppercase and 1 special character");
            }
        }
    }

},{timestamps:true})

userSchema.methods.validatePassword = async function(passwordInputByUser : string): Promise<boolean>{
    const user= this;
    const passwordHash= user.passwordHash;
   const isPasswordValid= await bcrypt.compare(passwordInputByUser, passwordHash);
   return isPasswordValid;
}

userSchema.methods.getRefreshToken = async function () {
  const user = this;
  const tokenId = crypto.randomUUID();
  const familyId = crypto.randomUUID();

  await Session.create({
    tokenId,
    userId: user._id,
    familyId,
    expiresAt: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
  });

  const token = jwt.sign(
    { tokenId, userId: user._id, familyId },
    process.env.REFRESH_TOKEN_KEY!,
    { expiresIn: "15d" }
  );

  return token;
};

userSchema.methods.getAccessToken = async function(){
    const user = this;

};
const User : Model<UserInterface> = mongoose.models.User || mongoose.model<UserInterface>('User', userSchema);

export default User;


/**
 * {
  sub: "user_123",
  jti: "uuid-v4",         // THIS is the important one — links to the DB row
  fam: "family-uuid",     // token family ID (for theft detection)
  exp: 1714392000         // expires (30 days later)
}


 *{
  // standard claims
  sub: "user_123",        // user ID
  iat: 1711800000,        // issued at
  exp: 1711800900,        // expires (15 min later)
  jti: "uuid-v4",         // unique token ID (for blocklisting if needed)

  // custom claims
  role: "admin",          // for authorization checks
  email: "user@x.com",   // if needed by API
  plan: "pro"             // feature flags, rate limits, etc.
} 
 * 
 */