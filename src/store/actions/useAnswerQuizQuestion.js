import { useCallback } from 'react';
import { ACTION_TYPES } from '../constants';
import { useAppDispatch } from '../selectors/useAppDispatch';

export const useAnswerQuizQuestion = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (answer) => {
      dispatch({
        type: ACTION_TYPES.ANSWER_QUIZ_QUESTION,
        payload: {
          answer,
        },
      });
    },
    [dispatch]
  );
};
