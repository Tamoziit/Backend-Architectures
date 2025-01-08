import express from "express";
import { getBlogs, postBlog } from "../controllers/generalBlog.controller.js";

const router = express.Router();

router.get("/get-blogs/general", getBlogs);
router.post("/post-blogs/general", postBlog);

export default router;