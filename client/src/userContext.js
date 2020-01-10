import React from "react";

const UserContext = React.createContext({
  email: "",
  topics: [],
  loggedIn: false
});

export default UserContext;