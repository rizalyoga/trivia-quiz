import React from "react";
//import unswer typed
import { AnswerObject } from "../page/index";
//import style
import { Wrapper, ButtonWrapper } from "./Questions.styles";

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
    <Wrapper>
      <p className="number">
        Question: {questionsNumber}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answer.map((answer) => (
          <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
