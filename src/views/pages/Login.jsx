/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import * as firebase from "firebase/app"
import {withRouter} from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyBHeTk3vPuoVFFVVfia3cx7XdOZ4P0zHZ8",
  authDomain: "webservicemidterm.firebaseapp.com",
  databaseURL: "https://webservicemidterm.firebaseio.com",
  projectId: "webservicemidterm",
  storageBucket: "webservicemidterm.appspot.com",
  messagingSenderId: "26177089883",
  appId: "1:26177089883:web:6a773a3938d2f42c7e6a7e",
  measurementId: "G-S2LMF21EDL"
};

class Login extends React.Component {
  constructor(props) {
    firebase.initializeApp(firebaseConfig);
    super(props);
    this.state = {email: '', password: ''};
  }
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  handleLogin = (e) => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(
      function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      }
    ).then(auth => {
      if(auth != null){
        console.log(auth)
        this.props.history.push('/admin/dashboard')
      }
    })
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }
  render() {
    return (
      <>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form className="form">
                <Card className="card-login card-white">
                  <CardHeader>
                    <img
                      alt="..."
                      src={require("assets/img/card-primary.png")}
                    />
                    <CardTitle tag="h1">Log in</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmailChange}/>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </InputGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="mb-3"
                      color="primary"
                      href="#pablo"
                      onClick={this.handleLogin}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}

export default withRouter(Login);