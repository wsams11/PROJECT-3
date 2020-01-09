import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Login from "./pages/login";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
=======
import Home from "./pages/Home";
import Topics from "./pages/topics";
// import Login from "./components/Login";

>>>>>>> 8435bd9dfe614787f923f03d8445e9dd559221d5

function App() {
  return (
    <Router>
<<<<<<< HEAD
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
=======
>>>>>>> 0f797f949c9d17998a2b3964b8272e98506e651c
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/topics" component={Topics} />
          {/* <Route exact path="/Login" component={Login} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
<<<<<<< HEAD
      {/* </div> */}
>>>>>>> 8435bd9dfe614787f923f03d8445e9dd559221d5
=======
    
>>>>>>> 0f797f949c9d17998a2b3964b8272e98506e651c
    </Router>
  );
}

export default App;
