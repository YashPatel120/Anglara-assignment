import request from "supertest";
import app from "../../src/server";

let token: string;

beforeEach(async () => {
  await request(app)
    .post("/api/auth/register")
    .send({ email: "test@test.com", password: "123456" });

  const login = await request(app)
    .post("/api/auth/login")
    .send({ email: "test@test.com", password: "123456" });

  token = login.body.data.token;
});

describe("Category APIs", () => {
  it("should block unauthorized access", async () => {
    const res = await request(app).get("/api/category");
    expect(res.status).toBe(401);
  });

  it("should create a category", async () => {
    const res = await request(app)
      .post("/api/category")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Electronics" });

    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe("Electronics");
  });

  it("should fetch categories", async () => {
    await request(app)
      .post("/api/category")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "TV" });

    const res = await request(app)
      .get("/api/category")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(1);
  });
});
