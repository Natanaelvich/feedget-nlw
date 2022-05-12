import {GetAllFeedbackService} from './getall-feedback.service'

const findAllFeedbackSpy = jest.fn();

const getAllFeedbackService = new GetAllFeedbackService(
  { create: async () => {},findAll : findAllFeedbackSpy },
);

describe("GetAllFeedbackService", () => {
  it("should be able to find all feedback", async () => {
    await expect(
        getAllFeedbackService.execute()
    ).resolves.not.toThrow();

    expect(findAllFeedbackSpy).toHaveBeenCalled();
  });
});
