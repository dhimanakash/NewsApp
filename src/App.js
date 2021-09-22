import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import Sports from "./components/Sports/Sports";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sports" component={Sports} />
      </Switch>
    </>
  );
};

export default App;
