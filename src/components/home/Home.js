import React from 'react'
import './Home.css'
import {Outlet} from 'react-router-dom'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Home() {

  let {register,handleSubmit,formState:{errors}}=useForm()
  
  let Login=(newUser)=>{
    axios.post("http://localhost:4000/users",newUser)
    .then(response=>{
      console.log("response is",response)
      if (response.status===201){
        navigate("/investor")
      } 
  
    })
    .catch(err=>{
      console.log("error is",errors)
      if(err.response){
          setError(err.message)
      }
      else if(err.request){
        setError(err.message)
      }
      else{
        setError(err.message)
      }
    })
    }
    let [error,setError]=useState("")

  const navigate=useNavigate();

  let Mentor=()=>{
    navigate('/mentor')
  }

  let Investor=()=>{
    navigate('/investor')
  }
  let TeamUp=()=>{
    navigate('/teamup')
  }
 

  return (
    <div style={{backgroundColor:"#36393F",height:"100vh"}}>
        <Navbar bg="dark" expand="lg" >
    <Container fluid>
      <Navbar.Brand href="#" style={{ fontWeight: "bold", fontSize: "24px", color: "#fff" }}>
        Magenta
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <Form className="d-flex">
          {/* <Button
            variant="outline-success"
            
            style={{ marginLeft: "auto", fontWeight: "bold" }}
          >
            Investor/Mentor Login
          </Button> */}
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 mt-5" style={{ backgroundColor: "#36393F", padding: "20px" }}>
  <Card border="primary" className="mx-auto mt-3 mb-3" style={{ width: '18rem', backgroundColor: "#2F3136", color: "#FFF" }}>
    <Card.Header style={{ backgroundColor: "#202225", borderBottom: "none" }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.bF0v_qaIi5kvaOvWqtUv5wHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
    </Card.Header>
    <Card.Body>
      <Button class="bg-light mb-2" style={{ backgroundColor: "#7289DA", color: "#FFF", border: "none" }} onClick={Mentor}>Find Mentor</Button>
    </Card.Body>
  </Card>
  <Card border="primary" className="mx-auto mt-3 mb-3" style={{ width: '18rem', backgroundColor: "#2F3136", color: "#FFF" }}>
    <Card.Header style={{ backgroundColor: "#202225", borderBottom: "none" }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.I4CFcM9yp2fS1RB5w8JTGgHaEK?w=327&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
    </Card.Header>
    <Card.Body>
      <Button class="bg-light mb-2" style={{ backgroundColor: "#7289DA", color: "#FFF", border: "none" }} onClick={TeamUp}>Team-Up</Button>
    </Card.Body>
  </Card>
  <Card border="primary" className="mx-auto mt-3 mb-3" style={{ width: '18rem', backgroundColor: "#2F3136", color: "#FFF" }}>
    <Card.Header style={{ backgroundColor: "#202225", borderBottom: "none" }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.RropAJywXGx8-jcNY_AeRwHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7 " />
    </Card.Header>
    <Card.Body>
      <Button class="bg-light mb-2" style={{ backgroundColor: "#7289DA", color: "#FFF", border: "none" }} onClick={Investor}>Find Investor</Button>
    </Card.Body>
  </Card>
</div>
    </div>
   


  )
}

export default Home