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

  // 매개변수 e에 React.MouseEvent<HTMLAnchorElement> 타입 명시
  const handleShareClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // 기본 동작 방지
    console.log("handleShareClick called");

    const element = document.querySelector(".result-page") as HTMLElement;
    if (!element) {
      console.error("Element not found");
      alert("캡처할 요소를 찾을 수 없습니다.");
      return;
    }

    console.log("Element found, proceeding with capture...");

    try {
      const canvas = await html2canvas(element);
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            const item = new ClipboardItem({ "image/png": blob });
            await navigator.clipboard.write([item]);
            alert("이미지가 클립보드에 복사되었습니다.");
          } catch (clipError) {
            console.error("클립보드 복사 실패:", clipError);
            alert("클립보드에 복사할 수 없습니다.");
          }
        } else {
          console.error("Blob 생성 실패");
          alert("이미지 처리 중 오류가 발생했습니다.");
        }
      }, "image/png");
    } catch (error) {
      console.error("Error capturing the element:", error);
      alert("캡처 중 오류가 발생했습니다.");
    }
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
