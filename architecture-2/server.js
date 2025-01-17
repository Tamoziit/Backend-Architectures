import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

import connectToMongoDB from "./db/connectToMongoDB.js";
import blogRoutes from "./routes/blog.routes.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.get("/api/arch2/v1", (req, res) => {
    res.send("<h1>Architecture 2 up & running</h1>");
});

app.use("/api/arch2/v1/blogs", blogRoutes);

app.listen(PORT, () => {
    console.log(`Arch-2 Server running on Port: ${PORT}`);
    connectToMongoDB();
});