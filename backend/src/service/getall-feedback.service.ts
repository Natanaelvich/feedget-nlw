import { FeedbacksRepository } from "../repositories/models/feedbacks.repository";

export class GetAllFeedbackService {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
  ) {}

  async execute() {
   return this.feedbacksRepository.findAll()
  }
}
