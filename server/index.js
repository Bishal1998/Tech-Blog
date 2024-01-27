import express from "express";
import { configDotenv } from "dotenv";
import connectToDb from "./db/index.js";
import userRoutes from "./routes/User.js";

configDotenv();

const app = express();
const PORT = process.env.PORT;
connectToDb();

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})