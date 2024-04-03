import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/First-page/FistPage";
import InputPage from "./pages/Input-page/InputPage";
import LoadingPage from "./pages/Loading-page/LoadingPage";
import ResultPage from "./pages/Result-page/ResultPage";

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
