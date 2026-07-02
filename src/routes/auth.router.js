import { Router } from "express";
import { login } from "../controllers/auth.controllers.js";

const router = Router();

// prefijo: /api/auth

router.post("/login", login);

export default router;
