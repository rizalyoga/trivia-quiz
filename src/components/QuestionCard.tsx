import React from "react";
//import unswer typed
import { AnswerObject } from "../page/index";

type Props = {
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionsNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ question, answer, callback, userAnswer, totalQuestions, questionsNumber }) => {
  return (
    <div>
      <p className="number">
        Question: {questionsNumber}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answer.map((answer) => (
          <div key={answer}>
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
