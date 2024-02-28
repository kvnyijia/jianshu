import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import Home from './pages/home'
import Detail from "./pages/detail";

function App() {
  return (
    <Provider
      store={store}
    > 
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/detail"  element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
