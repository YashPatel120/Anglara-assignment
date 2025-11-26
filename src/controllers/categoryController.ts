import Category from '../models/Category';
import { Request, Response } from 'express';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.create(req.body);

    return res.json({
      success: true,
      message: "Category created successfully",
      data: category,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Category creation failed",
      data: error,
    });
  }
};


export const getTree = async (_req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    return res.json({
      success: true,
      message: "Category list fetched",
      data: categories,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Fetching categories failed",
      data: error,
    });
  }
};


export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.json({
      success: true,
      message: "Category updated",
      data: category,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Updating category failed",
      data: error,
    });
  }
};


export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await Category.findByIdAndDelete(req.params.id);

    return res.json({
      success: true,
      message: "Category deleted",
      data: null,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Deleting category failed",
      data: error,
    });
  }
};
