import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Topics from "./pages/topics";
import Login from "./pages/login";


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/topics" component={Topics} />
          <Route exact path="/login" component={Login} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        
    </Router>
  );
}

export default App;
