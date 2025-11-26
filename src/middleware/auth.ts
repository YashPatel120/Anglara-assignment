import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function (req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ msg: "No token" });

  const token = authHeader.split(" ")[1]; // remove "Bearer"

  try {
    jwt.verify(token, "secret");
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
}
