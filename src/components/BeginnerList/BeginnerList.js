import { useState } from "react";
import { Link } from "react-router-dom";
import { beginnersConfig } from "./config";
import SustainableItem from "../SustainableItem";

function BeginnerList() {
  const [sustResult, setSustResult] = useState("");
  const [touched, setTouched] = useState(false);
  const calculateSustainability = () => {
    const totalNumCheckboxes = beginnersConfig.length;
    const checkedCheckboxes = beginnersConfig.filter(
      (config) => config.checked
    );
    const result = Math.round(
      (100 * checkedCheckboxes.length) / totalNumCheckboxes
    );
    setSustResult(result);
    setTouched(true);
  };
  console.log(beginnersConfig);
  return (
    <div className="list-wrapper">
      <h1 className="header">Towards sustainability</h1>
      <h3 className="beginner">Beginners list</h3>
      {beginnersConfig.map((config) => (
        <SustainableItem
          config={config}
          calculateSustainability={calculateSustainability}
        />
      ))}

      <div>
        <button onClick={calculateSustainability}>Check results</button>
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
              ? `You have done ${sustResult}% of the beginners list.`
              : touched
              ? "You haven't checked any list item"
              : ""}
          </div>
          {sustResult > 0 && sustResult < 100 && (
            <div>Make it all and go to the expert list! </div>
          )}
          {sustResult === 100 && <div>Now you can go to the next level!</div>}
        </strong>
      </div>
      {sustResult === 100 && (
        <Link className="link-button" to="/expert-list">
          <button type="button">Go to The Expert List</button>
        </Link>
      )}
    </div>
  );
}

export default BeginnerList;
