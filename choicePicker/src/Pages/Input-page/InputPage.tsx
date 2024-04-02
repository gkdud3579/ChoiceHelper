import './InputPage.scss';

function InputPage() {
  return (
    <div className="input-page">
      <div className="input-title">enter your 5 choices</div>
      <input className="input" type="text" value="choice 1" />
      <input className="input" type="text" value="choice 2" />
      <input className="input" type="text" value="choice 3" />
      <input className="input" type="text" value="choice 4" />
      <input className="input" type="text" value="choice 5" />
      <button className="submit-button">Submit</button>
    </div>
  );
}

export default InputPage;