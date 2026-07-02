import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const generateToken = (userData) => {
    const payload = {
        id: userData.id,
        email: userData.email,
        admin: userData.admin,
    };

    const secret = process.env.JWT_SECRET || "default_jwt_secret";
    const options = {
        expiresIn: "1h",
    };

    return jwt.sign(payload, secret, options);
};

