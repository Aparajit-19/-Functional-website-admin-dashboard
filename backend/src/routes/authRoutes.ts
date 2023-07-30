import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const adminUsername = "Aparajit";
const adminPassword = "Aparajit-Round-1";
const secretKey = "Aparajit-19";

router.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === adminUsername && password === adminPassword) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
