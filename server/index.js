import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})