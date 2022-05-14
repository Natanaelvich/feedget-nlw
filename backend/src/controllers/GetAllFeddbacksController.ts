import { Request, Response } from "express";
import { PrismaFeedbackRepository } from "../repositories/prisma/prisma-feedback-repository";
import { GetAllFeedbackService } from "../service/getall-feedback.service";

export class GetAllFeddbacksController {
  async handle(_: Request, response: Response) {
    /*
#swagger.tags = ['Feedback']
#swagger.description = 'Route for find all feedback.'
} */

    try {
      const prismaFeedbackRepository = new PrismaFeedbackRepository();

      const getAllFeedbackService = new GetAllFeedbackService(
        prismaFeedbackRepository
      );

      const feedbacks = await getAllFeedbackService.execute();

      return response.json(feedbacks);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
