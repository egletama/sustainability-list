import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import BeginnerList from "./components/BeginnerList";
import ExpertList from "./components/ExpertList";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={BeginnerList} exact />
        <Route path="/expert-list" component={ExpertList} />
      </Switch>
    </div>
  );
}

export default App;
