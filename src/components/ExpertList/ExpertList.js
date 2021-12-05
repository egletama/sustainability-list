import { useState } from "react";
import { Link } from "react-router-dom";
import { expertsConfig } from "./expertConfig";
import SustainableItem from "../SustainableItem";

function ExpertList() {
  const [sustResult, setSustResult] = useState("");
  const [touched, setTouched] = useState(false);
  const calculateSustainability = () => {
    const totalNumCheckboxes = expertsConfig.length;
    const checkedCheckboxes = expertsConfig.filter(
      (expertsConfig) => expertsConfig.checked
    );
    const result = Math.round(
      (100 * checkedCheckboxes.length) / totalNumCheckboxes
    );
    setSustResult(result);
    setTouched(true);
  };
  return (
    <div className="list-wrapper">
      <h1 className="header">Towards sustainability</h1>
      <h3 className="exper">Experts list</h3>
      {expertsConfig.map((expertsConfig) => (
        <SustainableItem
          configObj={expertsConfig}
          calculateSustainability={calculateSustainability}
        />
      ))}

      <div className="button-div">
        <button onClick={calculateSustainability}>Check results</button>{" "}
        <Link to="/">
          <button type="button">Back to the beginners list</button>
        </Link>
        {sustResult === 100 && (
          <Link to="/expert-list">
            <button type="button">Go to the super expert list</button>
          </Link>
        )}
      </div>
      <div>
        <strong>
          {sustResult > 0 && sustResult < 30 && <div>You are doing well! </div>}
          {sustResult >= 30 && sustResult < 60 && (
            <div>You are doing great! </div>
          )}
          {sustResult >= 60 && sustResult <= 90 && <div>You are amazing! </div>}
          {sustResult > 99 && <div>You are awesome! </div>}
          <div className="result">
            {sustResult > 0
              ? `You have done ${sustResult}% of the experts list`
              : touched
              ? "You haven't checked any list item"
              : ""}
          </div>
          {sustResult > 0 && sustResult < 100 && (
            <div>Make it all and go to the super expert list! </div>
          )}
          {sustResult === 100 && <div>Now you can go to the next level!</div>}
        </strong>
      </div>
    </div>
  );
}

export default ExpertList;
