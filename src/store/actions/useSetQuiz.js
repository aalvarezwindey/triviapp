import { useCallback } from 'react';
import { ACTION_TYPES, STATE_KEYS } from '../constants';
import { useAppDispatch } from '../selectors/useAppDispatch';

export const useSetQuiz = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (quiz) => {
      dispatch({
        type: ACTION_TYPES.SET_QUIZ,
        payload: {
          [STATE_KEYS.CURRENT_QUIZ]: quiz,
        },
      });
    },
    [dispatch]
  );
};
