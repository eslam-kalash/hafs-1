import './App.scss';
import Routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store';

// Configure redux store
const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
    
  );
}

export default App;
