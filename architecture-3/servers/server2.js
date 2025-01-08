import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

import connectToGeneralDB from "../db/GeneralDB.js";
import generalBlogRoutes from "../routes/generalBlog.routes.js";

const PORT2 = process.env.PORT2 || 8001;
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

app.use("/api/arch3/v1/blogs", generalBlogRoutes);

app.listen(PORT2, () => {
    console.log(`Arch-3 Server-2 running on Port: ${PORT2}`);
    connectToGeneralDB();
});