import React from 'react'
import './Investor.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col, } from 'react-bootstrap';
import axios from 'axios'
function Investor() {

  let [error,setError]=useState("")
    let [users,setUsers]=useState([])

    useEffect(()=>{
       axios.get("http://localhost:5000/inv_users")
      .then(response=>{
        if(response.status===200){
          console.log(response)
          setUsers(response.data)
        }
        
      }
      )
      .catch(err=>{
        
      })
    },[])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
 
    <div style={{backgroundColor:"#b9bbbe"}}>
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
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
 
    {
      users.map(userObj=><div className='col ' key={userObj.id}>

           <div>
<>
<Form>
  <Card border="primary" className="mx-auto mt-3 mb-3" style={{ width: '18rem', backgroundColor: '#36393f', color: '#fff' }}>
    <Card.Header style={{ backgroundColor: '#2f3136', borderBottom: '1px solid #4f545c' }}>
      <Card.Img variant="top" src={userObj.img} style={{ borderRadius: '50%', width: '30px', height: '30px' }} />
      <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>{userObj.name}</span>
    </Card.Header>
    <Card.Body style={{ backgroundColor: '#2f3136' }}>
      <Card.Title style={{ color: '#fff' }}>Investor Details</Card.Title>
      <Card.Text>
        <p style={{ color: '#b9bbbe' }}>Email: {userObj.email}</p>
      </Card.Text>
      <Card.Text>
        <p style={{ color: '#b9bbbe' }}>Projects Sponsered: {userObj.experience}</p>
      </Card.Text>
      <a href={userObj.linkedIn} target="_blank" rel="noopener noreferrer">

      <Button className="bg-light mb-2 mx-3" style={{ backgroundColor: '#4f545c', border: 'none' }}><span style={{fontWeight: 'bold',color:"#4f545c"}} >LinkedIn</span></Button>
      </a>
      <Button className="bg-light mb-2" style={{ backgroundColor: '#4f545c', border: 'none' }}><span style={{fontWeight: 'bold',color:"#4f545c"}} onClick={handleShow}>Post</span></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SUCCESS!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you posted your idea succesfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    
    
    </Card.Body>
  </Card>
</Form>

  
      <br />
    </>
  
 
    </div>



      </div>)
    }

  </div></div>
    

  )
}

export default Investor