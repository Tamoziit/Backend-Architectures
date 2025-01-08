import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

import connectToMongoDB from "./db/connectToMongoDB.js";
import blogRoutes from "./routes/blog.routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.get("/api/arch1/v1", (req, res) => {
    res.send("<h1>Architecture 1 up & running</h1>");
});

app.use("/api/arch1/v1/blogs", blogRoutes);

app.listen(PORT, () => {
    console.log(`Arch-1 Server running on Port: ${PORT}`);
    connectToMongoDB();
});