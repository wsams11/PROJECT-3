
import React from 'react';
import NavBar from "../components/navBar";
// import axios from "axios";
import Footer from '../components/footer'
import { Container, Form, Button, Col, Row, DropdownButton, Dropdown } from "react-bootstrap";
import UserContext from "../userContext.js";
// import {setUser, user} from "../App.js"

// import "./login.css"
// import "bootstrap/dist/css/bootstrap.min.css";

const topicsArray = ["Taxes", "Finances", "Renting an Apartment", "Buying a Home", "Saving and Investing", "Buying a Car", "Career Advice", "Investing", "Insurance"];

function Login(props) {
  const { setTopic, handleChange, handleSignupSubmit, handleLoginSubmit } = props;
  console.log(props)
  // const {email, password, topics } = UseContext(UserContext);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value
  //   });
  // }

  // const setTopic = topic => {
  //   setUser({
  //     ...user,
  //     topics: topic
  //   });
  // }

  // const handleLoginSubmit = e => {
  //   e.preventDefault();
  //   console.log("handleSubmit")

  //   axios.post("v1/user/signin", {
  //     email: user.email,
  //     password: user.password,
  //     topics: user.topics
  //   })
  //     .then(response => {
  //       console.log("login response: ");
  //       console.log(response);
  //       if (response.status === 200) {
  //         localStorage.setItem("token", response.data.token);
  //         // this.props.updatedUser({
  //         //   loggedIn: true,
  //         //   email: response.data.email,
  //         //   topics: response.data.topics
  //         // });
  //         // this.setState({
  //         //   email: "",
  //         //   password: "",
  //         //   topics: "",
  //         //   redirectTo: ""
  //         // })
  //         props.history.push("/home");
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // };

  // const handleSignupSubmit = e => {
  //   e.preventDefault();
  //   console.log("handleSubmit")

  //   axios.post("v1/user/signup", {
  //     email: user.email,
  //     password: user.password,
  //     topics: user.topics
  //   })
  //     .then(response => {
  //       console.log("login response: ");
  //       console.log(response);
  //       if (response.status === 200) {
  //         localStorage.setItem("token", response.data.token);
  //         props.updatedUser({
  //           loggedIn: true,
  //           email: response.data.email,
  //           topics: response.data.topics
  //         });
  //         // this.setState({
  //         //   email: "",
  //         //   password: "",
  //         //   topics: "",
  //         //   redirectTo: ""
  //         // })
  //         props.history.push("/home");
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // };



  return (

    <UserContext.Consumer >

      {user =>
        <Container>
          <NavBar />
          <main role="main" className="inner cover">
            <h1 className="cover-heading">TRANSITIONS</h1>
            <Row>

              <Col xs={12} md={6} lg={5} className="LoginContainer">

                <h1> Login</h1>

                <Form classNanme="Form">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button
                    onClick={handleLoginSubmit}
                    className="submitBtn" type="submit">
                    Submit
  `           </Button>
                </Form>

              </Col>

              <Col xs={12} md={6} lg={5} className="SignupContainer">

                <h1> Signup</h1>
                <Form classNanme="Form">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} value={user.email} name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} name="password" value={user.password} type="password" placeholder="Password" />
                  </Form.Group>


                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <DropdownButton id="dropdownBtn" title={user.topic || "Select Topics"}>

                    {topicsArray.map(topic => <Dropdown.Item onClick={() => setTopic(topic)}>{topic}</Dropdown.Item>)}
                    {/* <Dropdown.Item>Taxes</Dropdown.Item>
                <Dropdown.Item>Finances</Dropdown.Item>
                <Dropdown.Item>Renting an Apartment</Dropdown.Item>
                <Dropdown.Item>Buying a Home</Dropdown.Item>
                <Dropdown.Item >Saving/Investing</Dropdown.Item>
                <Dropdown.Item >Buying a Car</Dropdown.Item>
                <Dropdown.Item >Career Advice</Dropdown.Item>
                <Dropdown.Item >Interviewing </Dropdown.Item>
                <Dropdown.Item >Insurance</Dropdown.Item> */}
                  </DropdownButton>
                  <Button className="submitBtn" onClick={handleSignupSubmit} type="submit">
                    Submit
              </Button>
                </Form>

              </Col>
            </Row>

          </main>

          <Footer />
        </Container>}
    </UserContext.Consumer>

  )
}


export default Login;
