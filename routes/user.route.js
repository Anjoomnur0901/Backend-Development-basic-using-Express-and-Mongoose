import express from "express"
import { getAllUsers, getOneUser, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";
const router = express.Router();
//api/users: GET
//api/users/:id : GET
//api/users/ : POST
//api/users/:id : PATCH
//api/users/:id : DELETE

router.get("/",getAllUsers);
router.post("/",createUser);
router.get("/:id",getOneUser);
export {router as userRouter}
