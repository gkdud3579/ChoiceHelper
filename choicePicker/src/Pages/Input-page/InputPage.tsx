import React, { useState } from 'react';
import './InputPage.scss';

function InputPage() {
  // 입력 값을 관리할 상태 초기화
  const [choices, setChoices] = useState(["", "", "", "", ""]);

  // 입력 값 변경 핸들러
  const handleChange = (index, value) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  // 제출 버튼 클릭 핸들러
  const handleSubmit = () => {
    console.log(choices);
  };

  return (
    <div className="input-page">
      <div className="input-title">Enter your 5 choices</div>
      {choices.map((choice, index) => (
        <input
          key={index}
          className="input"
          type="text"
          value={choice}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`Choice ${index + 1}`}
        />
      ))}
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputPage;
