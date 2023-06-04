import './App.css';
import Home from './pages/Home';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
      </header>
      <Header></Header>
    </div>
  );
}

export default App;
