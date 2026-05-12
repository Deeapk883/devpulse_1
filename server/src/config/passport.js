import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";

dotenv.config();

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/api/auth/github/callback",
        },

        async (accessToken, refreshToken, profile, done) => {
            try {
                return done(null, {
                    profile,
                    accessToken,
                });
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

export default passport;