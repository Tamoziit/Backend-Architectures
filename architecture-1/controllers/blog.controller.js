import Blog from "../models/blog.model.js"

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
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
        const { type, name, content } = req.body;

        if (!type || !name || !content) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (type !== "general" && type !== "coding") {
            return res.status(400).json({ error: "Wrong type field" });
        }

        const newBlog = new Blog({
            type,
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
        console.log("Error in posting blog", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}