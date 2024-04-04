import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from './Pages/First-page/FirstPage';
import InputPage from './Pages/Input-page/InputPage';
import LoadingPage from './Pages/Loading-page/LoadingPage';
import ResultPage from './Pages/Result-page/ResultPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/Loading" element={<LoadingPage />} />
          <Route path="/Result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
