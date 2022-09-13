import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { logger } from '../../logger';
import { ROUTES } from '../../routing';
import QuizService from '../../services/QuizService';
import { useCurrentAnswers, useIsQuizCompleted } from '../../store';
import PlayAgainAction from './components/PlayAgainAction/PlayAgainAction';
import QuizQuestionsResults from './components/QuizQuestionsResults/QuizQuestionsResults';
import QuizScoreHeader from './components/QuizScoreHeader/QuizScoreHeader';

export default function ScorePage() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const answers = useCurrentAnswers();
  const isQuizCompleted = useIsQuizCompleted();
  useEffect(() => {
    const submitAnswers = async () => {
      try {
        const answersMap = {};

        answers.forEach(({ answer, questionNumber }) => {
          answersMap[questionNumber] = answer;
        });

        const calculatedResults = await QuizService.submitAnswers({
          answers: answersMap,
        });
        setResults(calculatedResults);
      } catch (err) {
        logger.error('[ScorePage][submitAnswers] error', err);
        setError(err);
      }
    };
    if (answers && answers.length) {
      submitAnswers();
    }
  }, [answers]);

  if (!isQuizCompleted) return <Navigate to={ROUTES.LANDING} replace={true} />;

  if (error) {
    // TODO: do something better
    return <h1>Could not calculate results... please try again</h1>;
  }

  if (!results) {
    // TODO: show something more fancy
    return <h1>Calculating results...</h1>;
  }

  return (
    <>
      <QuizScoreHeader
        questionsAmount={results.length}
        correctlyAnsweredQuestionsAmount={
          results.filter((r) => r.isCorrect).length
        }
      />
      <QuizQuestionsResults results={results} />
      <PlayAgainAction />
    </>
  );
}
