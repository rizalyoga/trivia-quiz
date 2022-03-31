import React, { useState } from "react";
import { fetchQuizApi } from "../API/Api";
/* -------------------------------- component ------------------------------- */
import QuestionCard from "../components/QuestionCard";

/* ---------------------------------- Types --------------------------------- */

import { QuestionsState, Difficulty } from "../API/Api";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 20;

const QuisPage = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUsetAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizApi(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestions = () => {};

  return (
    <div>
      <p>React Quis APP</p>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">score :</p>
      <p>Loading Question</p>
      {/* <QuestionCard questionsNumber={number + 1} totalQuestions={TOTAL_QUESTIONS} question={questions[number].question} answer={questions[number].answer} userAnswer={userAnswer ? userAnswer[number] : undefined} callback={checkAnswer} /> */}
      <button className="next" onClick={nextQuestions}>
        Next Question
      </button>
    </div>
  );
};

export default QuisPage;
