import { GeneralBlog } from "../models/blog.model.js"

export const getBlogs = async (req, res) => {
    try {
        const blogs = await GeneralBlog.find({});

        if (blogs) {
            res.status(200).json(blogs);
        } else {
            res.status(400).json({ error: "No Blogs found" });
        }
    } catch (error) {
        console.log("Error in fetching general blogs", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const postBlog = async (req, res) => {
    try {
        const { name, content } = req.body;

        if (!name || !content) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newBlog = new GeneralBlog({
            type: "general",
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
        console.log("Error in posting general blog", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}