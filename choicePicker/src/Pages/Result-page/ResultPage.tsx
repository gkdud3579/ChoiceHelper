import React from "react";
import { useLocation } from "react-router-dom";
import "./ResultPage.scss";

function ResultPage() {
  const location = useLocation();
  const { chosen } = location.state || {};

  return (
    <div className="result-page">
      <div className="result-title">This is your choice!</div>
      <div className="result">{chosen || 'No choice selected'}</div>
      <a>share your choice</a>
      <button className="retry-button">retry</button>
    </div>
  );
}

export default ResultPage;