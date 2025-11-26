import { createCategory } from "../../src/controllers/categoryController";
import Category from "../../src/models/Category";

jest.mock("../../src/models/Category");

describe("Category Controller Unit Tests", () => {
  it("should return success on create", async () => {
    const req: any = { body: { name: "Test" } };
    const res: any = { json: jest.fn() };

    (Category.create as jest.Mock).mockResolvedValue({ name: "Test" });

    await createCategory(req, res);

    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "Category created successfully",
      data: { name: "Test" }
    });
  });
});
