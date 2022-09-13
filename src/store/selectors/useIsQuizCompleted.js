import { useCurrentAnswers } from './useCurrentAnswers';
import { useCurrentQuiz } from './useCurrentQuiz';

export const useIsQuizCompleted = () => {
  const answers = useCurrentAnswers();
  const quiz = useCurrentQuiz();
  return (
    answers &&
    quiz &&
    answers.length &&
    quiz.length &&
    answers.length === quiz.length
  );
};
