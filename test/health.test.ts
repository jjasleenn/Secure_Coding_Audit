import request from "supertest";
import app from "../src/app";

describe("Health Check Endpoint", () => {
  it("should return status OK", async () => {
    const res = await request(app).get("/api/v1/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("OK");
  });

  it("should include version and uptime", async () => {
    const res = await request(app).get("/api/v1/health");
    expect(res.body).toHaveProperty("version");
    expect(res.body).toHaveProperty("uptime");
    expect(typeof res.body.uptime).toBe("number");
  });

  it("should return a valid timestamp", async () => {
    const res = await request(app).get("/api/v1/health");
    expect(new Date(res.body.timestamp).toString()).not.toBe("Invalid Date");
  });
});

 


 
