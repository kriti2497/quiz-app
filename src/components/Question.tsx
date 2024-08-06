import {
  OptionInterface,
  Question as QuestionInterface,
} from "../interfaces/question";

import React from "react";

const Question: React.FC<{
  question: QuestionInterface;
  submitAnswer: (arg: OptionInterface) => void;
  number: number;
}> = ({ question, submitAnswer, number }) => {
  return (
    <div className="py-5">
      <div className="text-lg mb-3">
        {number}. {question.question}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {question.answerOptions.map((option: OptionInterface) => {
          return (
            <button
              key={option.text}
              className="p-4 border rounded hover:bg-gray-200"
              onClick={() => submitAnswer(option)}
            >
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
