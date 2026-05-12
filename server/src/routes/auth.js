import express from "express";
import passport from "../config/passport.js";
import { githubCallback } from "../controllers/authController.js";

const router = express.Router();

router.get(
    "/github",
    passport.authenticate("github", {
        scope: ["user:email"],
    })
);

router.get(
    "/github/callback",
    passport.authenticate("github", {
        session: false,
        failureRedirect: "/login",
    }),
    githubCallback
);

export default router;