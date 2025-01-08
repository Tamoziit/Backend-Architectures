import mongoose from "mongoose";
import connectToMongoDB from "../db/connectToMongoDB.js";

const { CodingDB, GeneralDB } = await connectToMongoDB();

const BlogSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["general", "coding"],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const GeneralBlog = GeneralDB.model("GeneralBlog", BlogSchema);
export const CodingBlog = CodingDB.model("CodingBlog", BlogSchema);