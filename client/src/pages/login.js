
import React from 'react';
import NavBar from "../components/navBar";
import { Container, Form, Button, Col, Row, DropdownButton, Dropdown } from "react-bootstrap";
import UserContext from "../userContext.js";


const topicsArray = ["Taxes", "Finances", "Renting an Apartment", "Buying a Home", "Saving and Investing", "Buying a Car", "Career Advice", "Investing", "Insurance"];

function Login(props) {
  const { setTopic, handleChange, handleSignupSubmit, handleLoginSubmit } = props;

  console.log(props)

  return (

    <UserContext.Consumer >

      {user =>
        <Container>
          <NavBar />
          <main role="main" className="inner cover">
            <Row>

              <Col xs={12} md={6} lg={5} className="LoginContainer">

                <h1> Login</h1>

                <Form classNanme="Form" action="/login" method = "post">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} type="email" value={user.email} name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} name="password" value={user.password} type="password" placeholder="Password" />
                  </Form.Group>

                  <Button
                    onClick={handleLoginSubmit}
                    className="submitBtn" type="submit" value = "Log In">
                    Submit
                    </Button>
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
                  </DropdownButton>
                  <Button className="submitBtn" onClick={handleSignupSubmit} type="submit">
                    Submit
              </Button>
                </Form>

              </Col>
            </Row>

          </main>

         
        </Container>}
    </UserContext.Consumer>

  )
}


export default Login;
