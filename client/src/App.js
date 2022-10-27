import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
