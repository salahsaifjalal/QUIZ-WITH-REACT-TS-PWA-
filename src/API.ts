import { shuffleQuiz } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Situation {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

export const bringQuizQuestions = async (amount: number, difficulty: Situation): Promise<QuestionsState[]> => {

  let getAPI = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  
  let quizData = await (await fetch(getAPI)).json();

  
 return quizData.results.map((question: Question) => ({
    ...question,
    answers: shuffleQuiz([...question.incorrect_answers, question.correct_answer])
  }))
};
