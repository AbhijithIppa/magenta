import React from 'react'
// import './One.css'
import {Outlet} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Carousel } from 'react-bootstrap';

import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function One() {
  const navigate = useNavigate();

  let ntologin = () => {
    navigate("/userlogin");
  };
  return (

    <div className="container">
    <header className="header">
      <div className="logo">
        <h2>MAGENTA</h2>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Entrepreneurs</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="cta">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>
    </header>
    <Carousel className="carousel">
      <Carousel.Item>
        <div className="hero">
          <div className="hero-content">
            <h1>Find Investors for Your Next Big Idea</h1>
            <p>Our platform connects entrepreneurs with investors, providing a space for them to share and collaborate on ideas, and turn them into reality.</p>
            <button className="hero-cta">Get Started</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default One;