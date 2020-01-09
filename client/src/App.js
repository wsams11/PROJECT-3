import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Login from "./pages/login";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
=======
import Home from "./pages/Home";
// import Home2 from "./pages/Home2";
import Topics from "./pages/topics";
// import Login from "./components/Login";

>>>>>>> 8435bd9dfe614787f923f03d8445e9dd559221d5

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
=======
      {/* <div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/topics" component={Topics} />
          {/* <Route exact path="/Login" component={Login} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      {/* </div> */}
>>>>>>> 8435bd9dfe614787f923f03d8445e9dd559221d5
    </Router>
  );
}

export default App;
