import request from "supertest";
import app from "../../src/server";

describe("Auth APIs", () => {
  it("should register a user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "test@test.com", password: "123456" });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should login and return JWT token", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({ email: "test@test.com", password: "123456" });

    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@test.com", password: "123456" });

    expect(res.status).toBe(200);
    expect(res.body.data.token).toBeDefined();
  });

  it("should return error for invalid password", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({ email: "demo@test.com", password: "123456" });

    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "demo@test.com", password: "wrong" });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });
});
