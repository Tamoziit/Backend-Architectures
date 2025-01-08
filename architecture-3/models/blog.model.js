import mongoose from "mongoose";
import connectToCodingDB from "../db/CodingDB.js";
import connectToGeneralDB from "../db/GeneralDB.js";

const CodingDB = connectToCodingDB();
const GeneralDB = connectToGeneralDB();

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