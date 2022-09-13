import { useContext } from 'react';
import { STATE_KEYS } from '../constants';
import { StoreContext } from '../Store';

export const useCurrentAnswers = () => {
  const [state] = useContext(StoreContext);
  return state[STATE_KEYS.CURRENT_ANSWERS];
};
