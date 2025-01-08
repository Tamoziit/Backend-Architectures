import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectToGeneralDB = () => {
    try {
        const GeneralDB = mongoose.createConnection(process.env.GENERAL_DB);
        console.log("Connected to GeneralDB");
        return GeneralDB;
    } catch (error) {
        console.log("Error in connecting to General DB: ", error);
    }
}

export default connectToGeneralDB;