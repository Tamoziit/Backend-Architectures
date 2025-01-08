import { CodingBlog, GeneralBlog } from "../models/blog.model.js"

export const getBlogs = async (req, res) => {
    try {
        const { type } = req.params;

        let blogs;

        if (type === "general") {
            blogs = await GeneralBlog.find({});
        } else if (type === "coding") {
            blogs = await CodingBlog.find({});
        } else {
            throw new Error("Invalid type provided. Type must be 'general' or 'coding'.");
        }

        if (blogs) {
            res.status(200).json(blogs);
        } else {
            res.status(400).json({ error: "No Blogs found" });
        }
    } catch (error) {
        console.log("Error in fetching blogs", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const postBlog = async (req, res) => {
    try {
        const { name, content } = req.body;
        const { type } = req.params;

        if (!type || !name || !content) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (type !== "general" && type !== "coding") {
            return res.status(400).json({ error: "Wrong type field" });
        }

        let newBlog;
        if (type === "coding") {
            newBlog = new CodingBlog({
                type,
                name,
                content
            });
        } else if (type === "general") {
            newBlog = new GeneralBlog({
                type,
                name,
                content
            });
        } else {
            throw new Error("Invalid type provided. Type must be 'general' or 'coding'.");
        }

        if (newBlog) {
            const data = await newBlog.save();
            res.status(201).json(data);
        } else {
            res.status(400).json({ error: "Enter valid blog data" });
        }
    } catch (error) {
        console.log("Error in posting blog", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}