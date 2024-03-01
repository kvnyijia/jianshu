import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import Home from './pages/home'
import Detail from "./pages/detail/store/loadable";
import Login from "./pages/login";
import Write from "./pages/write";

function App() {
  return (
    <Provider
      store={store}
    > 
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/login"  element={<Login/>}/>
          <Route path="/detail/:id"  element={<Detail/>}/>
          <Route path="/write" element={<Write/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
