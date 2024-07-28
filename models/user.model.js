import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true,
    },
    createdOn:{
        type:Date,
        default: Date.now,
    }
    }

);
export const User = mongoose.model('User', userSchema);