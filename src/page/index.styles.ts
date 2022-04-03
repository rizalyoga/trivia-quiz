import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import BGQuiz from "../assets/QuizBg.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%
    }

    body {
        background-image: linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)),url(${BGQuiz});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
    }
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  h1 {
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-size: 4rem;
    color: #0085a3;
    border-radius: 5px;
    background-size: 100%;
    background-clip: text;
    padding: 0 20px;
    --webikit-background-clip: text;
    --webikit-text-fill-color: transparent;
    --moz-text-fill-color: transparent;
    --moz-background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    align-items: center;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
