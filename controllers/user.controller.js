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
const getOneUser = async(req,res)=>{
    try{const user = await User.findOne({id: req.params.id})
    res.status(200).json({user});}
    catch(e){res.status(500).send(error.message)};
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

const updateUser = async (req,res)=>{
    try{
        const user = await User.findOne({id: req.params.id})
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save();
        res.status(200).json({user});
    }catch(error){
        res.status(500).send(error.message);
    }
};
const deleteUser = async(req,res)=>{
    try{ await User.deleteOne({id: req.params.id})
    res.status(200).json({message:"User is deleted"});}
    catch(e){res.status(500).send(error.message)};
};
export{getAllUsers, getOneUser, createUser, updateUser, deleteUser}