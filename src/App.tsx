import './App.css';
import Home from './pages/Home';
import "../src/styles/kk.scss"
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <Home/>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
