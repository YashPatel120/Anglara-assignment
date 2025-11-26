import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashed });

    return res.json({
      success: true,
      message: "User registered successfully",
      data: null
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Registration failed",
      data: error
    });
  }
};


export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({
        success: false,
        message: "Wrong password",
      });

    const token = jwt.sign({ id: user._id }, "secret");

    return res.json({
      success: true,
      message: "Login successful",
      data: { token }
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed",
      data: error
    });
  }
};
