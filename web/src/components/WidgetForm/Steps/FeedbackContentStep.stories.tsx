import { Popover } from "@headlessui/react";
import { Meta, StoryObj } from "@storybook/react";
import {
  FeedbackContentStep,
  FeedbackContentStepProps,
} from "./FeedbackContentStep";
import { rest } from "msw";

export default {
  title: "Components/WidgetForm/Steps/FeedbackContentStep",
  component: FeedbackContentStep,
  args: {
    feedbackType: "BUG",
  },
  parameters: {
    msw: {
      handlers: [
        rest.post("http://localhost:3333/feedback", (req, res) => {
          return res();
        }),
      ],
    },
  },
  decorators: [
    (story) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-96">
              {story()}
            </div>
          </Popover.Panel>
        </Popover>
      );
    },
  ],
} as Meta<FeedbackContentStepProps>;

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "BUG",
  },
};
export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "IDEA",
  },
};
export const Other: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "OTHER",
  },
};
