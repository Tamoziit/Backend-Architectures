import { CodingBlog } from "../models/blog.model.js"

export const getBlogs = async (req, res) => {
    try {
        const blogs = await CodingBlog.find({});

        if (blogs) {
            res.status(200).json(blogs);
        } else {
            res.status(400).json({ error: "No Blogs found" });
        }
    } catch (error) {
        console.log("Error in fetching coding blogs", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const postBlog = async (req, res) => {
    try {
        const { name, content } = req.body;

        if (!name || !content) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newBlog = new CodingBlog({
            type: "coding",
            name,
            content
        });

        if (newBlog) {
            const data = await newBlog.save();
            res.status(201).json(data);
        } else {
            res.status(400).json({ error: "Enter valid blog data" });
        }
    } catch (error) {
        console.log("Error in posting coding blog", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}