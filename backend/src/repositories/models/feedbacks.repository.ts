import { Feedback } from "@prisma/client";

export interface CreateFeedbackRepositoryDto {
    type: string;
    comment: string;
    screenshot?: string;
  }
  
  export interface FeedbacksRepository {
    create: (data: CreateFeedbackRepositoryDto) => Promise<void>;
    findAll: () => Promise<Feedback[]>
  }
  