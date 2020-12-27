import Intro from "./components/intro";
import Main from "./components/main";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/" component={Intro} />
      <Route  path="/main" component={Main} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
