import express from 'express';
import { deleteUser, test, updateUser } from '../controller/User.js';
import verifyToken from '../utils/verifyUser.js';
import { signOut } from 'firebase/auth';

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser)
router.delete("/delete/:userId", verifyToken, deleteUser)
router.post("/signout", signOut)

export default router;