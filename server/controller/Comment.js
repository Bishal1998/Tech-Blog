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

const getComment = async (req, res, next) => {
    try {
        const { postId } = req.params;
        const comment = await Comment.find({ postId }).sort({
            createdAt: -1
        });
        res.status(200).json(comment);
    } catch (error) {
        next(error);
    }
}

export { createComment, getComment }