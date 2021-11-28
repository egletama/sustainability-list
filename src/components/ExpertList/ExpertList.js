import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function ExpertList() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        hello egle Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to="/">Back to Beginner list</Link>
    </div>
  );
}

export default ExpertList;
