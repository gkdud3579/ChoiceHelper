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

  // 이미지 다운로드 처리를 위한 함수
  const handleShareClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // 기본 동작 방지
    console.log("handleShareClick called");

    const element = document.querySelector(".result-page") as HTMLElement;
    if (!element) {
      console.error("Element not found");
      alert("캡처할 요소를 찾을 수 없습니다.");
      return;
    }

    // html2canvas를 사용하여 요소를 캔버스로 변환
    html2canvas(element)
      .then((canvas) => {
        // 캔버스를 이미지 URL로 변환
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "result-image.png"; // 다운로드 될 파일 이름 지정
        link.click();
      })
      .catch((error) => {
        console.error("Error capturing the element:", error);
        alert("이미지 캡처 중 오류가 발생했습니다.");
      });
  };

  const resultClass = chosen ? determineFont(chosen) : "";

  return (
    <div className="result-page">
      <div className="result-title">This is your choice!</div>
      <div className={`result ${resultClass}`}>
        {chosen || "No choice selected"}
      </div>
      <a onClick={handleShareClick} style={{ cursor: "pointer" }}>
        share your choice
      </a>
      <button onClick={handleClick} className="retry-button">
        retry
      </button>
    </div>
  );
}

export default ResultPage;
