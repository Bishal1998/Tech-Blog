import { errorHandler } from "../utils/Error.js"
import Post from "../models/Post.js"
import nodemailer from 'nodemailer'


const createPost = async (req, res, next) => {

    if (!req.user.isAdmin) {
        return next(errorHandler(403, "You are not allowed to create a post"))
    }

    if (!req.body.title || !req.body.content) {
        return next(errorHandler(400, "Please provide all required fields"));
    }

    const slug = req.body.title.split(" ").join("-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "");

    const newPost = new Post({
        ...req.body,
        slug,
        userId: req.user.id
    });

    try {

        const savedPost = await newPost.save();
        res.status(201).json(savedPost);

    } catch (error) {
        return next(error)
    }
}

const getPosts = async (req, res, next) => {
    try {
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === 'asc' ? 1 : -1;
        const posts = await Post.find({
            ...(req.query.userId && { userId: req.query.userId }),
            ...(req.query.category && { category: req.query.category }),
            ...(req.query.slug && { slug: req.query.slug }),
            ...(req.query.postId && { _id: req.query.postId }),
            ...(req.query.searchTerm && {
                $or: [
                    { title: { $regex: req.query.searchTerm, $options: 'i' } },
                    { content: { $regex: req.query.searchTerm, $options: 'i' } }
                ]
            })
        }).sort({ createdAt: sortDirection }).skip(startIndex).limit(limit);
        const totalPosts = await Post.countDocuments();
        const now = new Date();

        const lastMonth = new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            now.getDate()
        )

        const lastMonthPosts = await Post.countDocuments({
            createdAt: { $gte: lastMonth }
        })

        res.status(200).json({ posts, totalPosts, lastMonthPosts })
    } catch (error) {
        return next(error)
    }
}

const deletePost = async (req, res, next) => {

    if (!req.user.isAdmin || !req.user.id === req.params.userId) {
        return next(errorHandler(403, "You are not allowed to delete this post."))
    }
    try {

        await Post.findByIdAndDelete(req.params.postId)
        res.status(200).json("This post has been deleted")

    } catch (error) {
        return next(error)
    }
}

const updatePost = async (req, res, next) => {
    if (!req.user.isAdmin || req.user.id !== req.params.userId) {
        return next(errorHandler(403, "You are not allowed to update this post"))
    }

    try {

        const updatedPost = await Post.findByIdAndUpdate(req.params.postId, {
            $set: {
                title: req.body.title,
                content: req.body.content,
                category: req.body.category,
                image: req.body.image
            }
        }, { new: true })
        res.status(200).json(updatedPost)
    } catch (error) {
        return next(error)
    }
}


const sendMail = async (req, res, next) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOptions = {
        from: {
            name: "Tech Blog",
            address: email
        },
        to: process.env.SMTP_USERNAME,
        subject: `New Message from ${firstName} ${lastName}`,
        text: `I have a message and that is ${message}. My email is ${email}`,
        html: `<div>
            <p>${message} </p>
            <p>With Regards,</p>
            <p>${firstName} ${lastName} </p>
            <p>${phoneNumber}</p>
            <p>${email}</p>
        </div>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(info);
        }
    });

}


const likePost = async (req, res, next) => {
    try {

        const post = await Post.findById(req.params.postId);

        if (!post) {
            return next(errorHandler(403, "Post Not found"));
        }

        const userIndex = post.likes.indexOf(req.user.id);

        if (userIndex === -1) {
            post.likesCount += 1;
            post.likes.push(req.user.id);
        } else {
            post.likesCount -= 1;
            post.likes.splice(userIndex, 1);
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        return next(error);
    }
}


const getLike = async (req, res, next) => {
    try {

        const post = await Post.findById(req.params.postId)

        if (!post) {
            return next(errorHandler(403, "No Post found"))
        }

        res.status(200).json(post)

    } catch (error) {
        return next(error)
    }
}

const updateShare = async (req, res, next) => {
    try {

        const post = await Post.findById(req.params.postId);

        if (!post) {
            return next(errorHandler(403, "No Post found"))
        }

        post.shareCount += 1;
        res.status(200).json(post);

    } catch (error) {
        return next(error)
    }
}


export { createPost, getPosts, deletePost, updatePost, sendMail, likePost, getLike, updateShare }