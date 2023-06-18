import './App.css';
import Home from './pages/Home';
import "../src/styles/kk.scss"
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Routes, Route } from 'react-router-dom';
import { NewsPage } from './pages/news';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news/:news_id' element={<NewsPage />} />
          <Route path='/dummy' element={<Home />} />
        </Routes>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
