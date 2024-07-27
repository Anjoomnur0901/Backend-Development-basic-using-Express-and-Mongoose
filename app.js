import express from 'express';
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import userRouter from "./routes/user.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}))// for accessing form data
app.use(express.json());
app.use("/api/users",userRouter);

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/./views/index.html");
})
//error handling for invalid route
app.get((request,response,next)=>{
    response.status(404).json({message:"route not found"});
})
//error handling for server
app.get((err,request,response,next)=>{
    response.status(500).json({message:"something broke"});
})
export{app};
