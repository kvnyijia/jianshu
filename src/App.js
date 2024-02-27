// import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';

function App() {
  return (
    <>
      <Provider
        store={store}
      >
        <Header/>
      </Provider>
    </>
  );
}

export default App;
