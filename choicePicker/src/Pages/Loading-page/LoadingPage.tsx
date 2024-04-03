import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LoadingPage.scss";

function LoadingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const choices = location.state.choices; // InputPage로부터 전달된 선택들

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      navigate("/result", { state: { chosen: randomChoice } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, choices]);
  return (
    <div className="loading-page">
      <div className="loading">
        <span>Shuffling</span>
        <br />
        <span>your</span>
        <br />
        <span>choices</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}

export default LoadingPage;
