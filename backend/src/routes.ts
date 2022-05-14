import express from "express";
import { body, validationResult } from "express-validator";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail.adapter";
import { CreateFeddbackController } from "./controllers/CreateFeddbackController";
import { GetAllFeddbacksController } from "./controllers/GetAllFeddbacksController";

export const routes = express.Router();
routes.post(
  "/feedback",
  body("type")
    .isString()
    .withMessage("Type is not string")
    .notEmpty()
    .withMessage("Type is required"),
  body("comment")
    .isString()
    .withMessage("Type is not string")
    .notEmpty()
    .withMessage("Type is required"),
  body("screenshot").optional(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
  new CreateFeddbackController().handle
);
routes.get("/feedback", new GetAllFeddbacksController().handle);
