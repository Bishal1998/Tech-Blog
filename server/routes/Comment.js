import express from 'express';
import { createComment, getComment } from '../controller/Comment.js';
import verifyToken from '../utils/verifyUser.js';

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getcomment/:postId", getComment)

export default router