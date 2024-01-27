import express from "express";
import { configDotenv } from "dotenv";
import connectToDb from "./db/index.js";
import userRoutes from "./routes/User.js";
import signupRoutes from "./routes/Signup.js";

configDotenv();

const app = express();
const PORT = process.env.PORT;
connectToDb();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", signupRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})