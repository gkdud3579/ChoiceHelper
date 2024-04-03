import './LoadingPage.scss';

function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="loading">
        <span>Shuffling</span><br />
        <span>your</span><br />
        <span>choices</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}

export default LoadingPage;