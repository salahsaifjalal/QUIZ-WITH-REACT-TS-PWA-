import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { initNotification } from "./firebaseServices/firebase_service";

import { bringQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// types
import { QuestionsState, Situation } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';



export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS: number = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  // const [mode, setMode] = useState("online");
  /*
  useEffect(()=> {
    setMode('offline')
  
  },[])
*/
  const TriviaDB = async () => {
    setLoading(true);
    setGameOver(false);
    // alert("YOU WISH TO START QUIZ")
    const newQuestions = await bringQuizQuestions(
      TOTAL_QUESTIONS,
      Situation.MEDIUM
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    //setMode('online');


  };


  let quizAudio2 = new Audio();
  let quizAudio3 = new Audio();
  quizAudio2.src = "/image/right.mp3";
  quizAudio3.src = "/image/wrong.mp3";

  function quizMethod1(): any {
    quizAudio2.play();
  }

  function quizMethod2(): any {
    quizAudio3.play();
  }




  const checkAnswer = (e: any) => {
    if (!gameOver) {

      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) {
        setScore((prev) => prev + 1);
        quizMethod1();
      } else {
        quizMethod2();
      }
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);

    }


  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
    else {
      setNumber(nextQ);
    }


  };





  return (
    <>
      <GlobalStyle />
      <Wrapper>


        

        <div className="App">
          <b><h1> Quiz App </h1></b>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <button onClick={initNotification}>
          Notification by Salah
         </button>


        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={TriviaDB}>
            <b>START QUIZ</b>
          </button>)
          : null}

        {userAnswers.length === TOTAL_QUESTIONS ? (

          <h2>Quiz is now ended.</h2>)
          : (<h3>Note: This quiz includes 10 questions.</h3>)}


        {userAnswers.length >= 1 ? <h2>You Scored == {score} </h2> : null}



        {loading ? <p> Questions are being loaded.........</p> : null}




        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            <b>Click me for Next Question</b>
          </button>) : null}



      </Wrapper>
    </>
  );
};

export default App;
