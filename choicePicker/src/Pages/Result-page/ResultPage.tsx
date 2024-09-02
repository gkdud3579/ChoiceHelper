import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
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

  const handleShareClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // 기본 동작 방지
    console.log("handleShareClick called");

    const element = document.querySelector(".result-page") as HTMLElement;
    if (!element) {
      console.error("Element not found");
      alert("캡처할 요소를 찾을 수 없습니다."); // 사용자에게 피드백 제공
      return;
    }

    console.log("Element found, proceeding with capture...");

    try {
      const canvas = await html2canvas(element);
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "result.png";
      link.click();
    } catch (error) {
      console.error("Error capturing the element:", error);
      alert("캡처 중 오류가 발생했습니다."); // 오류 발생 시 피드백 제공
    }
  };

  const resultClass = chosen ? determineFont(chosen) : "";

  return (
    <div className="result-page">
      <div className="result-title">This is your choice!</div>
      <div className={`result ${resultClass}`}>
        {chosen || "No choice selected"}
      </div>
      <a
        onClick={(e) => {
          console.log("Clicked!");
          handleShareClick(e);
        }}
        style={{ cursor: "pointer" }}
      >
        share your choice
      </a>
      <button onClick={handleClick} className="retry-button">
        retry
      </button>
    </div>
  );
}

export default ResultPage;
