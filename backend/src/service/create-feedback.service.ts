import { CreateFeedbackDto } from "./dto/create-feedback.dto";

export class CreateFeedbackService {
  constructor() {}

  async execute(createFeedbackDto: CreateFeedbackDto) {
    const { type, comment, screenshot } = createFeedbackDto;

    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot");
    }
  }
}
