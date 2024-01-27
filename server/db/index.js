import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const DB_URL = process.env.DATABASE_URL;

const connectToDb = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("MongoDB connection error: " + error);
        process.exit(1);
    }
}

export default connectToDb;