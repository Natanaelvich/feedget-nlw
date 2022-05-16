import redis from "../lib/cache";
import { FeedbacksRepository } from "../repositories/models/feedbacks.repository";

export class GetAllFeedbackService {
  constructor(private readonly feedbacksRepository: FeedbacksRepository) {}

  async execute() {
    const cacheKey = "feedbacks:all";

    const cachedFeedbacks = await redis.get(cacheKey);

    if (cachedFeedbacks) {
      return JSON.parse(cachedFeedbacks);
    }

    const feedbacks = await this.feedbacksRepository.findAll();

    await redis.set(cacheKey, JSON.stringify(feedbacks));

    return feedbacks;
  }
}
