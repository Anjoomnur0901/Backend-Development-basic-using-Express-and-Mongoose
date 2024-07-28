import { User } from '../models/user.model.js';
import {v4 as uuidv4} from "uuid";
// Use the User model in your controller logic

const getAllUsers = async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users)
    }catch(e){
        res.status(500).send(e.message);
    }
    
};
const getOneUser = (req,res)=>{
    
    res.status(200).json({
        message:"get one user",
    });
};

const createUser = async(req,res)=>{
    try{ const newUser = new User({
        id: uuidv4(),
        name: req.body.name,
        age: Number(req.body.age)
    })
    await newUser.save();
    res.status(201).json({newUser});
}catch(error){
    res.status(500).send(error.message);
}
   
};

const updateUser = (req,res)=>{
    res.status(201).json({
        message:"user updated",
    });
};
const deleteUser = (req,res)=>{
    res.status(200).json({
        message:"user deleted",
    });
};
export{getAllUsers, getOneUser, createUser, updateUser, deleteUser}