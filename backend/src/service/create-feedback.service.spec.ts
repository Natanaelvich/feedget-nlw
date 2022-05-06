import { CreateFeedbackService } from './create-feedback.service';

describe('CreateFeedbackService', () => {
  let createFeedback: CreateFeedbackService;
  const createFeedbackSpy = jest.fn();
  const sendMailSpy = jest.fn();

  beforeEach(async () => {
    createFeedback = new CreateFeedbackService(
      { create: createFeedbackSpy },
      { sendMail: sendMailSpy }
    );
  });
  it('should be able to submit a feedback', async () => {
    await expect(
      createFeedback.execute({
        type: 'bug',
        comment: 'I have a bug',
        screenshot: 'data:image/png;base64,dasdsadasd3e32eeewdasdas'
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback without type', async () => {
    await expect(
      createFeedback.execute({
        type: '',
        comment: 'I have a bug',
        screenshot: 'data:image/png;base64,dasdsadasd3e32eeewdasdas'
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit feedback without comment', async () => {
    await expect(
      createFeedback.execute({
        type: 'bug',
        comment: '',
        screenshot: 'data:image/png;base64,dasdsadasd3e32eeewdasdas'
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(
      createFeedback.execute({
        type: 'bug',
        comment: 'I have a bug',
        screenshot: '123'
      })
    ).rejects.toThrow();
  });
});
