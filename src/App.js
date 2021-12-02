import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import BeginnerList from "./components/BeginnerList";
import ExpertList from "./components/ExpertList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={BeginnerList} exact />
        <Route path="/expert-list" component={ExpertList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
