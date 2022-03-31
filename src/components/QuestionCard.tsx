import { type } from "os";
import React from "react";

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: any;
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
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
