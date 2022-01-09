import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { beginnersConfig } from "./config";
import SustainableItem from "../SustainableItem";

// React functional component
const BeginnerList = () => {
  // Declaring state
  const [sustResult, setSustResult] = useState(""); // initial value
  const [touched, setTouched] = useState(false); // initial value

  const calculateSustainability = (isFirstRender) => {
    const totalNumCheckboxes = beginnersConfig.length;
    const checkedCheckboxesArray = beginnersConfig.filter((configObj) => {
      return configObj.checked;
    });
    const result = Math.round(
      (100 * checkedCheckboxesArray.length) / totalNumCheckboxes
    );
    setSustResult(result);
    // check if it´s the initial render
    if (!isFirstRender) {
      setTouched(true);
    }
  };

  // react function that runs only on 1st render
  useEffect(() => {
    const isFirstRender = true;
    calculateSustainability(isFirstRender);
  }, []);

  return (
    <div className="list-wrapper">
      <h1 className="header">Towards Sustainability</h1>
      <h3 className="beginner">Beginners list</h3>
      {beginnersConfig.map((configObj) => (
        <SustainableItem
          configObj={configObj}
          calculateSustainability={() => calculateSustainability()}
        />
      ))}

      <div>
        <button
          className="checkButton"
          onClick={() => calculateSustainability()}
        >
          Check results
        </button>
        {sustResult === 100 && (
          <Link className="link-button" to="/expert-list">
            <button className="checkButton" type="button">
              Go to the expert list
            </button>
          </Link>
        )}
      </div>
      <div>
        <strong>
          {sustResult > 0 && sustResult <= 30 && (
            <div>You are doing well! </div>
          )}
          {sustResult > 30 && sustResult < 60 && (
            <div>You are doing great! </div>
          )}
          {sustResult >= 60 && sustResult <= 90 && <div>You are amazing! </div>}
          {sustResult > 99 && <div>You are awesome! </div>}
          <div className="result">
            {sustResult > 0
              ? `You have done ${sustResult}% of the beginners list.`
              : touched
              ? "You haven't checked any item"
              : ""}
          </div>
          {sustResult > 0 && sustResult < 100 && (
            <div>Make it all and go to the expert list! </div>
          )}
          {sustResult === 100 && <div> Now you can go to the next level!</div>}
        </strong>
      </div>
    </div>
  );
};

export default BeginnerList;
