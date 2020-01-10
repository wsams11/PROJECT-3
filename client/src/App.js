<<<<<<< HEAD

import React, { useState } from 'react';
import UserContext from "./userContext.js";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Topics from "./pages/topics";
import Login from "./pages/login";
import axios from "axios";




function App(props) {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    topics: []
  });



  const updatedUser = data => {

    setUser({
      loggedIn: data.loggedIn,
      email: data.email,
      topics: data.topics

    })
  }


  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  const setTopic = (topic) => {
    setUser({
      ...user,
      topics: topic
    });
  }

  const handleLoginSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit")

    axios.post("v1/user/signin", {
      email: user.email,
      password: user.password,
      topics: user.topics
    })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          this.props.updatedUser({
            loggedIn: true,
            email: response.data.email,
            topics: response.data.topics
          });
          // this.setState({
          //   email: "",
          //   password: "",
          //   topics: "",
          //   redirectTo: ""
          // })
          history.push("/topics");
        }
      })
      .catch(error => {
        console.log(error);
      })
  };

  const handleSignupSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit")

    axios.post("v1/user/signup", {
      email: user.email,
      password: user.password,
      topics: user.topics
    })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          updatedUser({
            loggedIn: true,
            email: response.data.email,
            topics: response.data.topics
          });
          // this.setState({
          //   email: "",
          //   password: "",
          //   topics: "",
          //   redirectTo: ""
          // })

          history.push("/topics");
        }
      })
      .catch(error => {
        console.log(error);
      })
  };

=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Topics from "./pages/topics";
// import Login from "./pages/login";
>>>>>>> ab409bbcb7df3233d67d6fb8bd341f9a3c786095


  return (
<<<<<<< HEAD

    <UserContext.Provider value={{ user }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/topics" component={Topics} />
        <Route exact path="/login" render={() => <Login
          // setUser={ setUser } 
          handleChange={handleChange}
          handleSignupSubmit={handleSignupSubmit}
          handleLoginSubmit={handleLoginSubmit}
          setTopic={setTopic} />} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </UserContext.Provider>

=======
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/topics" component={Topics} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        
    </Router>
>>>>>>> ab409bbcb7df3233d67d6fb8bd341f9a3c786095
  );
}

export default App;


