import { Popover } from "@headlessui/react";
import { Meta, StoryObj } from "@storybook/react";
import { FeedbackTypeStep } from "./FeedbackTypeStep";

export default {
  title: "Components/WidgetForm/Steps/FeedbackTypeStep",
  component: FeedbackTypeStep,
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
} as Meta;

export const Default: StoryObj = {};
