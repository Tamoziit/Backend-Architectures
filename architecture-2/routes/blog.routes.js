import express from "express";
import { getBlogs, postBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/get-blogs/:type", getBlogs);
router.post("/post-blogs/:type", postBlog);

export default router;