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
  return (
    <div>
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
          {sustResult > 0 && <div>You are awesome! </div>}
          <div className="result">
            {sustResult > 0
              ? `You have done ${sustResult}% of the beginners list`
              : touched
              ? "Please check some checkboxes"
              : ""}
          </div>
        </strong>
      </div>
      {sustResult === 100 && (
        <Link to="/expert-list">Go to Expert List page</Link>
      )}
    </div>
  );
}

export default BeginnerList;
