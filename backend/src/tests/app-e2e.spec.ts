import request from "supertest";
import express from "express";

import { routes } from "../routes";

const app = express();
app.use(express.json());
app.use(routes);

describe("Tests e2e APP", () => {
  it("Should be able get feedbacks", async () => {
    await request(app)
      .get("/feedback")
      .expect(200)
      .then((response) => {
        // Check the response type and length
        expect(Array.isArray(response.body)).toBeTruthy();
      });
  });

  it("Should be able create feedbacks", async () => {
    await request(app)
      .post("/feedback")
      .send({ type: "TEST", comment: "TEST COMENT", screenshot: "" })
      .expect(201);
  });
});
