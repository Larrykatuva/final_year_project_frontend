import logo from './logo.svg';
import './App.css';
import Home from './user/home/Index';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
