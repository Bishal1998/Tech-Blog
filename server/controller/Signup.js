import User from "../models/User.js";
import bcyptjs from "bcryptjs";

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "") {
        return res.status(400).json({ message: "All fields are required" })
    }

    const hashedPassword = bcyptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword })

    try {
        await newUser.save();
        res.json({ message: "User created successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export { signup }