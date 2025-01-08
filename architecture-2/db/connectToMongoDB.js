import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectToDatabase = async (uri, dbName) => {
    try {
        const connection = await mongoose.createConnection(uri, {
            dbName: dbName,
        });
        console.log(`Connected to ${dbName}`);
        return connection;
    } catch (error) {
        console.log(`Error connecting to ${dbName}:`, error);
        throw error;
    }
};

const connectToMongoDB = async () => {
    try {
        const CodingDB = await connectToDatabase(process.env.CODING_DB, "CodingDB");
        const GeneralDB = await connectToDatabase(process.env.GENERAL_DB, "GeneralDB");

        return { CodingDB, GeneralDB };
    } catch (error) {
        console.log("Error in connecting to MongoDB databases: ", error);
    }
};

export default connectToMongoDB;
