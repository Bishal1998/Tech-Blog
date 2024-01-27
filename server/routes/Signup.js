import express from "express";
import { signup } from "../controller/Signup.js";

const router = express.Router();

router.post("/signup", signup)


export default router;