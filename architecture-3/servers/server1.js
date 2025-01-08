import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

import connectToCodingDB from "../db/CodingDB.js";
import codingBlogRoutes from "../routes/codingBlog.routes.js";

const PORT1 = process.env.PORT1 || 8000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.get("/api/arch3/v1", (req, res) => {
    res.send("<h1>Architecture 3 up & running</h1>");
});

app.use("/api/arch3/v1/blogs", codingBlogRoutes);

app.listen(PORT1, () => {
    console.log(`Arch-3 Server-1 running on Port: ${PORT1}`);
    connectToCodingDB();
});