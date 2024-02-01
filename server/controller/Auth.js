import User from "../models/User.js";
import bcyptjs from "bcryptjs";
import { errorHandler } from "../utils/Error.js";
import jwt from "jsonwebtoken";

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "") {
        return next(errorHandler(400, 'All fields are required'));
    }

    const hashedPassword = bcyptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword })

    try {
        await newUser.save();
        res.json({ message: "User created successfully" })
    } catch (error) {
        return next(error);
    }
}

const signin = async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password || email === "" || password === "") {
        return next(errorHandler(400, "All fields are required."))
    }

    try {

        const validUser = await User.findOne({ email });

        if (!validUser) {
            return next(errorHandler(404, "User not found"))
        }

        const validPassword = bcyptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(404, "Password Invalid"));
        }

        const token = jwt.sign(
            { id: validUser._id, isAdmin: validUser.isAdmin },
            process.env.JWT_SECRET_KEY
        );

        const { password: pass, ...data } = validUser._doc;

        res.status(200).cookie("access_token", token, { httpOnly: true }).json(data);

    } catch (error) {
        next(error);
    }

}

const google = async (req, res, next) => {
    const { name, email, googlePhotoUrl } = req.body;

    try {

        const user = await User.findOne({ email: email });

        if (user) {
            const token = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            },
                process.env.JWT_SECRET_KEY);

            const { password, ...data } = user._doc;
            res.status(200).cookie("access_token", token, { httpOnly: true }).json(data);
        } else {

            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcyptjs.hashSync(generatedPassword, 10);

            const newUser = new User({
                username: name.toLowerCase().split(" ").join("") + Math.random().toString(9).slice(-4),
                profilePicture: googlePhotoUrl,
                password: hashedPassword,
                email
            })

            await newUser.save();

            const token = jwt.sign({
                id: newUser._id,
                isAdmin: newUser.isAdmin
            },
                process.env.JWT_SECRET_KEY);

            const { password, ...items } = newUser._doc;
            res.status(200).cookie("access_token", token, { httpOnly: true }).json(items);

        }

    } catch (error) {
        return next(error);
    }
}


export { signup, signin, google }