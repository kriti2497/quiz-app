export interface OptionInterface {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  answerOptions: OptionInterface[];
}
