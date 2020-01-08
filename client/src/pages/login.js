
import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar'
import axios from "axios";
import "./App.css"
import {Jumbotron, Table, Form, Button, Col, Row, DropdownButton, Dropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from './images/image.jpeg';


const Login = () => {



  return (

    <NavBar/>

  
    <main role="main" className="inner cover">
      <h1 className="cover-heading">TRANSITIONS</h1>

<Row>

      <Col   xs={12} md={6} lg={5}  className ="LoginContainer">

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

<Button  className="submitBtn"  type="submit">
Submit
</Button>
</Form>

</Col>


<Col  xs={12} md={6} lg={5} className ="SignupContainer">

<h1> Signup</h1>

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



<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>





<DropdownButton id="dropdownBtn" title="Select Topics">
  <Dropdown.Item href="#/action-1">Taxes</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Finances</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Renting an Apartment</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Buying a Home</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Saving/Investing</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Buying a Car</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Career Advice</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Interviewing </Dropdown.Item>
  <Dropdown.Item href="#/action-2">Insurance</Dropdown.Item>



</DropdownButton>



<Button  className="submitBtn"  type="submit">
Submit
</Button>
</Form>

</Col>
</Row>


      

    </main>
  
    <footer className="mastfoot mt-auto">
      <div className="inner">
        <p>App Created by Jacob Lara, Richard Klevan, William Sams III</p>
      </div>
    </footer>



  


export default Login;
