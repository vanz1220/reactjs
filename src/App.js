import logo from './logo.svg';
import './App.css';
import SocialFollow from './SocialFollow'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Routes, Route} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import SkillsPage from './SkillsPage'
import ContactPage from './ContactPage'

import * as React from "react";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-middle"
            />
            OWSHII- Portfolio&nbsp;&nbsp;✌😉
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/"><a href="/">Home</a></LinkContainer>&nbsp;&nbsp;
            <LinkContainer to="/about"><a href="/about">About</a></LinkContainer>
            </Nav>
          </Navbar.Collapse> 
        </Container> 
      </Navbar>
      <div class="row">
        <div class="column1">
        <img
            alt=""
            src={logo}
            className="d-inline-block align-middle"
            /><br/><br/>
          <LinkContainer to="/"><a href="/">Home</a></LinkContainer>&nbsp;
          <LinkContainer to="/about"><a href="/about">About</a></LinkContainer>&nbsp;
          <LinkContainer to="/service"><a href="/service">Services</a></LinkContainer>&nbsp;
          <LinkContainer to="/skills"><a href="/skills">Skills</a></LinkContainer>&nbsp;
          <LinkContainer to="/contact"><a href="/contact">Contact</a></LinkContainer>
        </div>
        <div class="column2">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={ <About/> } />
            <Route path="/service" element={ <Services/> } />
            <Route path="/skills" element={ <Skills/> } />
            <Route path="/contact" element={ <Contact/> } />
          </Routes>
        </div>
      </div>
      
      <SocialFollow />
    </div>
    
  );
}


function Home() {
  return (
    <>
      <main>
      <HomePage/>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <main>
      <AboutPage/>
      </main>
    </>
  );
}
function Services() {
  return (
    <>
      <main>
      <ServicesPage/>
      </main>
    </>
  );
}
function Skills() {
  return (
    <>
      <main>
      <SkillsPage/>
      </main>
    </>
  );
}
function Contact() {
  return (
    <>
      <main>
      <ContactPage/>
      </main>
    </>
  );
}
export default App;
