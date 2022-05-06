import { prisma } from "../../prisma";
import {
  CreateFeedbackRepositoryDto,
  FeedbacksRepository,
} from "../models/feedbacks.repository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ comment, type, screenshot }: CreateFeedbackRepositoryDto) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
