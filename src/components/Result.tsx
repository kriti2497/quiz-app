import { Question } from "../interfaces/question";
import React from "react";

const Result: React.FC<{
  userAnswers: boolean[];
  resetQuiz: () => void;
  questions: Question[];
}> = ({ userAnswers, resetQuiz, questions }) => {
  const correctAnswers = userAnswers.filter((each) => each).length;
  return (
    <div className="flex items-center flex-col py-5">
      <div className="text-xl">
        You answered {correctAnswers}/10 questions correctly!
      </div>
      <div
        className="underline cursor-pointer pt-4 hover:text-orange-500"
        onClick={resetQuiz}
      >
        Retry this quiz
      </div>

      <div className="mt-5">
        {questions.map((each, index) => (
          <p
            key={each.question}
            className={userAnswers[index] ? "text-green-600" : "text-red-500"}
          >
            {index + 1}. {each.question}
            {/* {!userAnswers[index] && (
              <span className="pl-2">
                {
                  questions[index].answerOptions.filter((option: OptionInterface) => {
                    if(option.isCorrect) {
                      return option.text
                    }
                  })[0]
                }
              </span>
            )} */}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Result;
