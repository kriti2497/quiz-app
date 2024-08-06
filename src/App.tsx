import "./App.css";

import { OptionInterface } from "./interfaces/question";
import Question from "./components/Question";
import Result from "./components/Result";
import questions from "./assets/constants/questions.json";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);

  const submitAnswer = (option: OptionInterface) => {
    setUserAnswers([...userAnswers, option.isCorrect]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setUserAnswers([]);
    setCurrentQuestion(0);
  };
  return (
    <div className="p-10">
      <div className="font-bold text-2xl text-center">Quiz it Up!</div>
      {/* Questions component */}
      {currentQuestion < questions.length && (
        <Question
          number={currentQuestion + 1}
          question={questions[currentQuestion]}
          submitAnswer={submitAnswer}
        />
      )}
      {/* Result component */}
      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          resetQuiz={resetQuiz}
          questions={questions}
        />
      )}
    </div>
  );
}

export default App;
