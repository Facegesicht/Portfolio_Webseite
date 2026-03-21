import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header.js';
import About from './Pages/About.js';
import Home from './Pages/Home.js';
import Portfolio from './Pages/Portfolio.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
    </Router>
    </div>
  );
}

export default App;
