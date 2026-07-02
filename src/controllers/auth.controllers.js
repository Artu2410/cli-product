import { generateToken } from "../utils/token.generator.js";

const default_user = {
  id: 1,
  name: "User",
  email: "user@email.com",
  password: "strongPass123",
  admin: true,
};

export const login = (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email y password son requeridos" });
    }

    if (email !== default_user.email || password !== default_user.password) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = generateToken({
      id: default_user.id,
      email: default_user.email,
      admin: default_user.admin,
    });

    return res.json({
      message: "Login exitoso",
      token,
      user: {
        id: default_user.id,
        name: default_user.name,
        email: default_user.email,
        admin: default_user.admin,
      },
    });
};