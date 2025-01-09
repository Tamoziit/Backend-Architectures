import axios from "axios";

// Microservice Endpoints
const CODING_BLOGS_SERVICE = "http://localhost:8000/api/arch3/v1/blogs";
const GENERAL_BLOGS_SERVICE = "http://localhost:8001/api/arch3/v1/blogs";

export const getBlogs = async (req, res) => {
    const { type } = req.params;

    try {
        if (type === "general") {
            const response = await axios.get(`${GENERAL_BLOGS_SERVICE}/get-blogs/general`);
            res.status(200).json(response.data);
        } else if (type === "coding") {
            const response = await axios.get(`${CODING_BLOGS_SERVICE}/get-blogs/coding`);
            res.status(200).json(response.data);
        } else {
            res.status(400).json({ error: "Invalid blog type" });
        }
    } catch (error) {
        res.status(500).json({ error: "Service unavailable" });
    }
};

export const addBlog = async (req, res) => {
    const { type } = req.params;
    const blogData = req.body;

    try {
        if (type === "general") {
            const response = await axios.post(`${GENERAL_BLOGS_SERVICE}/post-blogs/general`, blogData);
            res.status(201).json(response.data);
        } else if (type === "coding") {
            const response = await axios.post(`${CODING_BLOGS_SERVICE}/post-blogs/coding`, blogData);
            res.status(201).json(response.data);
        } else {
            res.status(400).json({ error: "Invalid blog type" });
        }
    } catch (error) {
        res.status(500).json({ error: "Service unavailable" });
    }
};
