import { CreateFeedbackService } from "./create-feedback.service";

const createFeedbackSpy = jest.fn();
const findAll = jest.fn();
const sendMailSpy = jest.fn();

const createFeedback = new CreateFeedbackService(
  { create: createFeedbackSpy, findAll },
  { sendMail: sendMailSpy }
);

describe("CreateFeedbackService", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      createFeedback.execute({
        type: "bug",
        comment: "I have a bug",
        screenshot: "data:image/png;base64,dasdsadasd3e32eeewdasdas",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      createFeedback.execute({
        type: "",
        comment: "I have a bug",
        screenshot: "data:image/png;base64,dasdsadasd3e32eeewdasdas",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      createFeedback.execute({
        type: "bug",
        comment: "",
        screenshot: "data:image/png;base64,dasdsadasd3e32eeewdasdas",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      createFeedback.execute({
        type: "bug",
        comment: "I have a bug",
        screenshot: "123",
      })
    ).rejects.toThrow();
  });
});
