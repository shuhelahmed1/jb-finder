import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route index element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
