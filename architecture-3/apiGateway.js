import dotenv from "dotenv";
dotenv.config();
import express from "express";

import blogRoutes from "./routes/gateway.routes.js";

const app = express();
const GATEWAY_PORT = process.env.GATEWAY_PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/gateway/blogs", blogRoutes);

app.listen(GATEWAY_PORT, () => {
    console.log(`API Gateway running on Port: ${GATEWAY_PORT}`);
});
