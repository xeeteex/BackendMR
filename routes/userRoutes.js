import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

export const userRouter = express.Router();


userRouter.get("/", (req, res) => {
  return res.status(200).json({ data: "all users" });
});


userRouter.route('/login').post(loginUser).all((req,res)=>{
  return res.status(405).json({ method:'method not allowed' });

});


userRouter.route('/register').post(registerUser).all((req,res)=>{
  return res.status(405).json({ method:'method not allowed' });

});





