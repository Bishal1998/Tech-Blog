import express from "express";
import { configDotenv } from "dotenv";
import connectToDb from "./db/index.js";

configDotenv();

const app = express();
const PORT = process.env.PORT;
connectToDb();


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})