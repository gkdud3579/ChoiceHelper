import './FirstPage.scss';
import { useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/input');
  };

  return (
    <div className="first-page">
      <div className="first-title">Choice Picker</div>
      <button className="start-button" onClick={handleClick}>Start</button>
    </div>
  );
}

export default FirstPage;