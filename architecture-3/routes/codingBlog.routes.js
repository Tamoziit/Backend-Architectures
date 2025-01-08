import express from "express";
import { getBlogs, postBlog } from "../controllers/codingBlog.controller.js";

const router = express.Router();

router.get("/get-blogs/coding", getBlogs);
router.post("/post-blogs/coding", postBlog);

export default router;