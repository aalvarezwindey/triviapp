import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import QuizHeader from './components/QuizHeader/QuizHeader';
import QuizNumberLegend from './components/QuizNumberLegend/QuizNumberLegend';
import QuizOptions from './components/QuizOptions/QuizOptions';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';
import { ROUTES } from '../../routing';
import {
  useAnswerQuizQuestion,
  useCurrentQuiz,
  useCurrentQuizQuestion,
  useIsQuizCompleted,
  useSetQuiz,
} from '../../store';
import QuizService from '../../services/QuizService';
import { logger } from '../../logger';

export default function QuizPage() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setQuiz = useSetQuiz();
  const answerQuizQuestion = useAnswerQuizQuestion();
  const quizQuestion = useCurrentQuizQuestion();
  const quiz = useCurrentQuiz();
  const isQuizCompleted = useIsQuizCompleted();

  useEffect(() => {
    const fetchNewQuiz = async () => {
      try {
        const newQuiz = await QuizService.getRandomQuizQuestions();
        setQuiz(newQuiz);
      } catch (err) {
        logger.error('[QuizPage][fetchNewQuiz] error', err);
        setError(err);
      }
    };
    fetchNewQuiz();
  }, [setQuiz]);

  useEffect(() => {
    if (isQuizCompleted) {
      navigate(ROUTES.SCORE, { replace: true });
    }
  }, [navigate, isQuizCompleted]);

  const onOptionSelected = (selectedOption) => {
    answerQuizQuestion(selectedOption);
  };

  if (error) {
    // TODO: handle error
    return <h1>We could not load the Trivia, please try again later.</h1>;
  }

  if (!quizQuestion) {
    // TODO: handle loading
    return <h1>loading...</h1>;
  }

  const { category, question, options, number } = quizQuestion;

  return (
    <>
      <QuizHeader>{category}</QuizHeader>
      <Card>
        <QuizQuestion>{question}</QuizQuestion>
      </Card>
      <QuizNumberLegend
        currentQuestionNumber={number}
        questionsAmount={quiz.length}
      />
      <QuizOptions options={options} onOptionSelected={onOptionSelected} />
    </>
  );
}
