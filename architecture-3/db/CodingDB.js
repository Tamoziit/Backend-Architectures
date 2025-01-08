import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectToCodingDB = () => {
    try {
        const CodingDB = mongoose.createConnection(process.env.CODING_DB);
        console.log("Connected to CodingDB");
        return CodingDB;
    } catch (error) {
        console.log("Error in connecting to Coding DB: ", error);
    }
}

export default connectToCodingDB;