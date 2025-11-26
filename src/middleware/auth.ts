import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ msg: 'No token' });
  try {
    jwt.verify(token, 'secret');
    next();
  } catch {
    res.status(401).json({ msg: 'Invalid token' });
  }
}
