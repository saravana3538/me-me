import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import logo from './img/logo.png';
import appstore from './img/app-store.png';
import profile from './img/profile.jpg';
import Container from 'react-bootstrap/Container';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Test from './components/test';



function App() {
  return (
    <div className="App">
      <Container fluid={true}>
       <Row>
          <Col className="home-left">
            <div className="menu-fixed">
            <img src={logo} className="App-logo" alt="logo" />
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link eventKey="link-1">About Us</Nav.Link>
              <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav>
            <img src={appstore} className="app-store" alt="app-store-logo" />

              <div className="socielicon">
                <div className="sociel-icon-space"><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></div>
                <div className="sociel-icon-space"><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></div>
                <div className="sociel-icon-space"><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></div>
              </div>

              <p className="copyright">© Copyright Me-Me</p>

            </div>
          </Col>
          <Col className="home-right">
            <div className="timeline">
                <div className="rowprofiletext">
                    <div>
                    <img src={profile} className="profile-img" alt="profile" />
                    </div>
                    <div className="rowprofilename">
                        <h5>saravana</h5>
                        <p>@saravana123</p>
                    </div>
                </div>

                <div className="video">
                  
                  <Test/>

                </div>

                <div className="posttextbtn">
                  <div className="posttext">
                    <p>Loren ipsum Loren ipsum Loren ipsum</p>
                  </div>
                  <div className="postbtn">
                    <FontAwesomeIcon icon={faMicrophone} size = '2x' color={'#fff'}/>
                  </div>
                </div>

            </div>

            
              
            

            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
            <h1>Loren ipsum</h1>
          </Col>
        </Row> 
        </Container>
    </div>
  );
}

export default App;
