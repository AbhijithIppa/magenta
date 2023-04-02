import React from 'react'
// import './Mentor.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, } from 'react-bootstrap';
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Form } from 'react-bootstrap';
function Mentor() {


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
    <div>

      {/* <>
  <Card border="primary" className='mx-auto'  style={{ width: '18rem' }}>
        <Card.Header>          
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.dlNZMi2v0402sjKjvxmI3QHaDt?w=350&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </Card.Header>
        <Card.Body>
          <Card.Title>Mentor Details</Card.Title>
          <Card.Text>
            <p>Mentor name:</p>
            <p>Email:</p>
        

          </Card.Text>
          <Button class="bg-light mb-2">Post</Button>
        </Card.Body>
      </Card>
      <br />
    </> */}
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
      <Card.Title style={{ color: '#fff' }}>Mentor Details</Card.Title>
      <Card.Text>
        <p style={{ color: '#b9bbbe' }}><b>Email</b>: {userObj.email}</p>
      </Card.Text>
      <Card.Text>
        <p style={{ color: '#b9bbbe' }}><b>Experience: </b></p>
        <p style={{ color: '#b9bbbe' }}>{userObj.experience}</p>
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
    
  </div>
  )
}

export default Mentor