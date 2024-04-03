import './ResultPage.scss';

function ResultPage() {
  return (
    <div className="result-page">
      <div className="result-title">This is your choice!</div>
      <div className="result">choice</div>
      <a>share your choice</a>
      <button className="retry-button">retry</button>
    </div>
  );
}

export default ResultPage;