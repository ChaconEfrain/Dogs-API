import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";

function App() {
  const dogsSearched = useSelector((state) => state.dogsSearched);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Header />
          <Home dogsSearched={dogsSearched} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
