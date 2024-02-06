import { errorHandler } from "../utils/Error.js";
import Comment from "../models/Comment.js";

const createComment = async (req, res, next) => {

    try {
        const { content, postId, userId } = req.body;

        if (userId !== req.user.id) {
            return next(errorHandler(403, "You are not allowed to create a comment."))
        }

        const newComment = await Comment({
            content,
            postId,
            userId
        })

        await newComment.save();
        res.status(200).json(newComment)

    } catch (error) {
        return next(error);
    }
}

export { createComment }