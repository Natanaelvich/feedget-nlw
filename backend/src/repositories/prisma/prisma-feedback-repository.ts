import { Feedback } from "@prisma/client";
import { prisma } from "../../prisma";
import {
  CreateFeedbackRepositoryDto,
  FeedbacksRepository,
} from "../models/feedbacks.repository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
  findAll() {
    return prisma.feedback.findMany();
  }

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
