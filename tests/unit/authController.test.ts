import { register } from "../../src/controllers/authController";
import User from "../../src/models/User";

jest.mock("../../src/models/User");
jest.mock("bcryptjs", () => ({
  hash: jest.fn().mockResolvedValue("hashedpassword"),
}));

describe("Auth Controller Unit Tests", () => {
  it("should register user", async () => {
    const req: any = { body: { email: "a@a.com", password: "123456" } };
    const res: any = { json: jest.fn() };

    (User.create as jest.Mock).mockResolvedValue({});

    await register(req, res);

    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "User registered successfully",
      data: null,
    });
  });
});
