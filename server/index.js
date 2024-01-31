import express from "express";
import { configDotenv } from "dotenv";
import connectToDb from "./db/index.js";
import userRoutes from "./routes/User.js";
import authRoutes from "./routes/Auth.js";
import { errorMiddleware } from "./middleware/Middleware.js";
import cookieParser from "cookie-parser";

configDotenv();

const app = express();
const PORT = process.env.PORT;
connectToDb();
app.use(express.json());
app.use(cookieParser())

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

export default app;