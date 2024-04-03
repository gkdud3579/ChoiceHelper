import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InputPage.scss";

function InputPage() {
  // 입력 값을 관리할 상태 초기화
  const [choices, setChoices] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();

  // 입력 값 변경 핸들러
  const handleChange = (index, value) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  // 폰트를 결정하는 함수
  const determineFont = (value) => {
    const koreanRegex = /[가-힣]/;
    return koreanRegex.test(value) ? "korean-font" : "english-font";
  };

  // 제출 버튼 클릭 핸들러
  const handleSubmit = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    navigate('/result', { state: { chosen: randomChoice } });
  };

  return (
    <div className="input-page">
      <div className="input-title">Enter your 5 choices</div>
      {choices.map((choice, index) => (
        <input
          key={index}
          className={`input ${determineFont(choice)}`}
          type="text"
          value={choice}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`Choice ${index + 1}`}
        />
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default InputPage;
