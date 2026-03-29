import mongoose, { Schema, Document, Model } from "mongoose";


interface SessionInterface extends Document{
    tokenId : string;
    userId: mongoose.Types.ObjectId;
    familyId: string;
    used: boolean;
    expiresAt: Date;

}

const sessionSchema = new Schema<SessionInterface>({
    tokenId:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref : 'User',
        required:true
        
    },
    familyId:{
        type:String,
        required:true,
        trim:true,
    },
    used:{
        type:Boolean,
        required:true
    },
    expiresAt:{
        type:Date,
        required:true
    }
},{timestamps:true});

const Session : Model<SessionInterface> = mongoose.models.Session || mongoose.model<SessionInterface>('Session', sessionSchema);

export default Session;