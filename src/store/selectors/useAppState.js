import { useContext } from 'react';
import { StoreContext } from '../Store';

export const useAppState = () => {
  const [state] = useContext(StoreContext);
  return state;
};
