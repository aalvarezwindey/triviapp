import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routing/AppRouter';
import { Store } from './store';
import { INITIAL_STATE } from './store/constants';

function App({ initialState = INITIAL_STATE }) {
  return (
    <Store initialState={initialState}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Store>
  );
}

export default App;
