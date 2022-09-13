import { useContext } from 'react';
import { STATE_KEYS } from '../constants';
import { StoreContext } from '../Store';

export const useCurrentQuizQuestion = () => {
  const [state] = useContext(StoreContext);
  return state[STATE_KEYS.CURRENT_QUIZ_QUESTION];
};
