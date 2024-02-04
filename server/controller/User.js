import bcryptjs from "bcryptjs"
import User from "../models/User.js"
import { errorHandler } from "../utils/Error.js"

const test = (req, res) => {
    res.json({ message: "API is working!" })
}

const updateUser = async (req, res, next) => {

    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, "You are not allowed to update this user"))
    }

    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(errorHandler(400, "Password must be at least 6 characters"))
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
    }

    if (req.body.username) {
        if (req.body.username.length < 7 || req.body.username.length > 20) {
            return next(errorHandler(400, "Username must be between 7 and 20 characters"))
        }

        if (req.body.username.includes(" ")) {
            return next(errorHandler(400, "Username cannot contain spaces"))
        }

        if (req.body.username !== req.body.username.toLowerCase()) {
            return next(errorHandler(400, "username must be lowercase"))
        }

        if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
            return next(errorHandler(400, "Username can only contain letters and numbers"))
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, {

                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password
                },
            }, { new: true });

            const { password, ...data } = updatedUser._doc;

            res.status(200).json(data);

        } catch (error) {
            return next(error)
        }
    }
}

const deleteUser = async (req, res, next) => {

    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, "You are not allowed to delete this user"))
    }

    try {

        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json("User has been deleted");

    } catch (error) {
        return next(error)
    }

}

const signOut = async (req, res, next) => {

    try {

        res.clearCookie("access_token").status(200).json("User has been signed out");

    } catch (error) {
        return next(error)
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return next(errorHandler(404, "User not found"))
        }
        const { password, ...data } = user._doc;
        res.status(200).json(data)

    } catch (error) {
        return next(error)
    }
}

export { test, updateUser, deleteUser, signOut, getUser }