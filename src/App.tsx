import './App.css';
import Home from './pages/Home';
import "../src/styles/kk.scss"
import { Header } from './components/header';
import { Footer } from './components/footer';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import { News } from './pages/news';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/dummy' element={<Home/>} />
        </Routes>
      </header>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default App;
