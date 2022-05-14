import { Request, Response } from "express";
import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailer-mail.adapter";
import { PrismaFeedbackRepository } from "../repositories/prisma/prisma-feedback-repository";
import { CreateFeedbackService } from "../service/create-feedback.service";

export class CreateFeddbackController {
  async handle(request: Request, response: Response) {
    /*
#swagger.tags = ['Feedback']
#swagger.description = 'Route for create feedback.'
#swagger.requestBody = {
required: true,
schema: { $ref: "#/definitions/createFeedback" }
} */

    try {
      const { type, comment, screenshot } = request.body;

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

      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
