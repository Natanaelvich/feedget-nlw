import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail.adapter";
import { CreateFeddbackController } from "./controllers/CreateFeddbackController";
import { GetAllFeddbacksController } from "./controllers/GetAllFeddbacksController";

export const routes = express.Router();
routes.post("/feedback", new CreateFeddbackController().handle);
routes.get("/feedback", new GetAllFeddbacksController().handle);
