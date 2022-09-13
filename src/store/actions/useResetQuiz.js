import { useCallback } from 'react';
import { ACTION_TYPES } from '../constants';
import { useAppDispatch } from '../selectors/useAppDispatch';

export const useResetQuiz = () => {
  const dispatch = useAppDispatch();

  return useCallback(() => {
    dispatch({
      type: ACTION_TYPES.RESET_QUIZ,
    });
  }, [dispatch]);
};
