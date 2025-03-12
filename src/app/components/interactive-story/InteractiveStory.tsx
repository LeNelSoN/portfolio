"use client";

import { useState } from "react";

interface StoryStep {
  text: string;
  options: { text: string; next: string }[];
}

interface InteractiveStoryProps {
  storyData: Record<string, StoryStep>;
  finalStep?: React.Dispatch<React.SetStateAction<boolean>>;
}

const InteractiveStory = ({ storyData, finalStep }: InteractiveStoryProps) => {
  const [currentStep, setCurrentStep] = useState("start");

  return (
    <div className="container mx-auto text-center md:w-1/2 px-8">
      <h2 className="text-3xl mb-6">Mon histoire dont vous étes le héros</h2>
      <p className="text-xl mb-6">{storyData[currentStep].text}</p>
      <div className="flex flex-col space-y-4">
        {currentStep === "end" && finalStep != null ? 
          <button
            className="bg-gray-600 hover:bg-gray-700 hover:cursor-pointer text-white py-2 px-4 rounded transition"
            onClick={() => finalStep(true)}
          >
            C`est fini !
          </button>
          :
          storyData[currentStep].options.map((option, index) => (
            <button
              key={index}
              className="bg-gray-600 hover:bg-gray-700 hover:cursor-pointer text-white py-2 px-4 rounded transition"
              onClick={() => setCurrentStep(option.next)}
            >
              {option.text}
            </button>
          ))
      }
      </div>
    </div>
  );
};

export default InteractiveStory;
