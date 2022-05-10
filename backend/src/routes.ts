import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail.adapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedback-repository";
import { CreateFeedbackService } from "./service/create-feedback.service";

export const routes = express.Router();
routes.post("/feedback", async (req, res) => {
  /*
  #swagger.description = 'Route for create feedback.'
*/

  /*    #swagger.parameters['obj'] = {
                in: 'body',
               schema: { $ref: '#/schemas/createFeedback' }
        } */

  try {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const createFeedbackService = new CreateFeedbackService(
      prismaFeedbackRepository,
      nodemailerMailAdapter
    );

    await createFeedbackService.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
