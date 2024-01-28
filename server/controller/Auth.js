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
            { id: validUser._id },
            process.env.JWT_SECRET_KEY
        );

        const { password: pass, ...data } = validUser._doc;

        res.status(200).cookie("access_token", token, { httpOnly: true }).json(data);

    } catch (error) {
        next(error);
    }

}


export { signup, signin }