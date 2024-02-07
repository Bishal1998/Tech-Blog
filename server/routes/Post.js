import express from 'express';
import verifyToken from '../utils/verifyUser.js';
import { createPost, deletePost, getLike, getPosts, likePost, sendMail, updatePost } from '../controller/Post.js';

const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost)
router.put("/updatepost/:postId/:userId", verifyToken, updatePost)
router.put("/like/:postId", verifyToken, likePost)
router.get("/like/:postId", getLike)

router.post("/contact", sendMail)


export default router;