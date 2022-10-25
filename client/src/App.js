import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Nav />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
