import mongoose, { Schema, Document, Model } from "mongoose";
import validator from 'validator';
import bcrypt from 'bcrypt';

export interface userInterface extends Document{
    name:string;
    email:string;
    password:string;
    createdAt:Date;
}

const userSchema = new Schema<userInterface>({
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
    password:{
        type:String,
        trim:true,
        required:true,
        validate(value:string){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong password.\n" + "Password must contain minimum 8 characters,1 lowercase ,1 uppercase and 1 special character");
            }
        }
    }

},{timestamps:true})

userSchema.methods.validatePassword = async function(passwordInputByUser : string){
    const user= this;
    const passwordHash= user.password;
   const isPasswordValid= await bcrypt.compare(passwordInputByUser, passwordHash);
   return isPasswordValid;
}

const User : Model<userInterface> = mongoose.models.User || mongoose.model<userInterface>('User', userSchema);

export default User;