import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import passport from "./config/passport.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/api/auth", authRoutes);

app.get("/api/test", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT 1 + 1 AS result");

        res.json({
            message: "Database connected",
            data: rows,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Database connection failed",
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});