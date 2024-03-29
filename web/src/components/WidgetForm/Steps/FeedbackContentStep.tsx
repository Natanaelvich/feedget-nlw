import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import api from "../../../services/api";
import CloseButton from "../../CloseButton";
import { Loading } from "../../Loading";

import { FeedbackKeysProps, feedbackTypes } from "../config";
import { ScreenshotButton } from "../ScreenshotButton";

export interface FeedbackContentStepProps {
  feedbackType: FeedbackKeysProps;
  onFeedbackRestartRequested: () => void;
  onFeedbackSend: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSend,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const [isSedingFeedback, setIsSedingFeedback] = useState(false);

  const { image, title } = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSedingFeedback(true)
    
    await api.post("feedback", {
        type: feedbackType,
        comment,
        screenshot,
    });

    setIsSedingFeedback(false)

    onFeedbackSend();
  }

  return (
    <>
      <header className='flex justify-between w-full'>
        <button
          type="button"
          className="text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={image.source} alt={image.alt} className="w-6 h-6" />
          {title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 bg-transparent border-zinc-600 rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb -zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={!comment || isSedingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
          >
            {isSedingFeedback ? <Loading /> : "Enviar Feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
