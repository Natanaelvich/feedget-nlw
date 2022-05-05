import express from "express";
import { CreateFeedbackService } from "./service/create-feedback.service";

export const routes = express.Router();
routes.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const createFeedbackService = new CreateFeedbackService();

  await createFeedbackService.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
