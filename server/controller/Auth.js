import User from "../models/User.js";
import bcyptjs from "bcryptjs";
import { errorHandler } from "../utils/Error.js";

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "") {
        next(errorHandler(400, 'All fields are required'));
    }

    const hashedPassword = bcyptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword })

    try {
        await newUser.save();
        res.json({ message: "User created successfully" })
    } catch (error) {
        next(error);
    }
}


export { signup }