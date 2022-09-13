import { ACTION_TYPES, STATE_KEYS } from './constants';

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_QUIZ: {
      const newQuiz = payload[STATE_KEYS.CURRENT_QUIZ];
      return {
        ...state,
        [STATE_KEYS.CURRENT_QUIZ]: newQuiz,
        [STATE_KEYS.CURRENT_QUIZ_QUESTION]: newQuiz[0],
      };
    }
    case ACTION_TYPES.ANSWER_QUIZ_QUESTION: {
      const { answer } = payload;
      const currentQuestion = state[STATE_KEYS.CURRENT_QUIZ_QUESTION];
      const currentQuiz = state[STATE_KEYS.CURRENT_QUIZ];

      // number starts at 1
      const nextQuestion =
        currentQuiz.length > currentQuestion.number
          ? currentQuiz[currentQuestion.number]
          : null;

      const previousAnswers = state[STATE_KEYS.CURRENT_ANSWERS];
      const newState = {
        ...state,
        [STATE_KEYS.CURRENT_ANSWERS]: [
          ...previousAnswers,
          { answer, questionNumber: currentQuestion.number },
        ],
        [STATE_KEYS.CURRENT_QUIZ_QUESTION]: nextQuestion,
      };

      return newState;
    }
    default:
      return state;
  }
};
