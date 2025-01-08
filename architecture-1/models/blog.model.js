import mongoose from "mongoose";

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

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;