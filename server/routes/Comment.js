import express from 'express';
import { createComment, getComment } from '../controller/Comment.js';
import verifyToken from '../utils/verifyUser.js';

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("comment", getComment)

export default router