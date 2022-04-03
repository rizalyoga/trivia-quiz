import React, { useState } from "react";
import { fetchQuizApi } from "../API/Api";
/* -------------------------------- component ------------------------------- */
import QuestionCard from "../components/QuestionCard";

/* ---------------------------------- Types --------------------------------- */
import { QuestionsState, Difficulty } from "../API/Api";

/* ------------------------------ import style ------------------------------ */
import { GlobalStyle, Wraper } from "./index.styles";

export type AnswerObject = {
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
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizApi(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answer
      const answer = e.currentTarget.value;

      //ceck answer against correct answer
      const correct = questions[number].correct_answer === answer;

      //add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestions = () => {
    // Move ti next question
    const nextQuestions = number + 1;

    if (nextQuestions === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestions);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wraper>
        <h1>Trivia Quis APP</h1>
        {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score : {score}</p> : null}
        {loading && (
          <p className="loading">
            Please Wait <br /> Loading Question...
          </p>
        )}
        {!loading && !gameOver && (
          <QuestionCard
            questionsNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answer={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestions}>
            Next Question
          </button>
        ) : null}
      </Wraper>
    </>
  );
};

export default QuisPage;
