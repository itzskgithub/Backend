import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser())

//Cors configuration

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    methods: ["PUT", "GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  }),
);

//import router

import healthCheckRouter from "./Routes/healthCheck.routes.js";

import authRouter from "./routes/auth.routes.js"

import projectRouter from "./routes/project.routes.js"

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

app.use("/api/v1/project", projectRouter);

app.get("/", (req, res) => {
  res.send("This is my first code in express");
});

export default app;
