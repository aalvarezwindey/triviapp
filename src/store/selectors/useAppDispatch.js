import { useContext } from 'react';
import { StoreContext } from '../Store';

export const useAppDispatch = () => {
  const [, dispatch] = useContext(StoreContext);
  return dispatch;
};
