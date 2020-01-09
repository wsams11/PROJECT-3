import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Home2 from "./pages/Home2";
import Topics from "./pages/topics";
// import Login from "./components/Login";


function App() {
  return (
    <Router>
      {/* <div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/topics" component={Topics} />
          {/* <Route exact path="/Login" component={Login} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
