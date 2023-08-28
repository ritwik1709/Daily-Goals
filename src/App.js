
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    //in This we can return only 1 div
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
