import express from "express";
import { addBlog, getBlogs } from "../services/gateway.services.js";

const router = express.Router();

router.get("/:type", getBlogs);
router.post("/:type", addBlog);

export default router;
