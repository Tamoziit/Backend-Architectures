import express from "express";
import { getBlogs, postBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/get-blogs", getBlogs);
router.post("/post-blogs", postBlog);

export default router;