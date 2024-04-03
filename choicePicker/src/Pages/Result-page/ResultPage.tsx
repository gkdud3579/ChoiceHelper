import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ResultPage.scss";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { chosen } = location.state || {};

  const determineFont = (value: string) => {
    const koreanRegex = /[가-힣]/;
    return koreanRegex.test(value) ? "korean-font" : "english-font";
  };

  const handleClick = () => {
    navigate("/");
  };

  const resultClass = chosen ? determineFont(chosen) : "";

  return (
    <div className="result-page">
      <div className="result-title">This is your choice!</div>
      <div className={`result ${resultClass}`}>
        {chosen || "No choice selected"}
      </div>
      <a>share your choice</a>
      <button onClick={handleClick} className="retry-button">
        retry
      </button>
    </div>
  );
}

export default ResultPage;
