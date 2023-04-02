import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Form,Container } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import './teamup.css'
function TeamUp() {
  
  let [error,setError]=useState("")
    let [users,setUsers]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/users")
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



 return (
 
 <div>
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
  
  <div className='row row-cols-1 row-cols-md-2 g-4'>

 {users.map(userObj =>
   <div className='col' key={userObj.id}>
 
     <div className='card discord-card'>
 
       <div className='card-header d-flex align-items-center'>
         <img src={userObj.img} alt={userObj.name} className='avatar me-3' />
         <div className='text-truncate'>
           <strong>{userObj.name}</strong>
           <span className='text-muted d-block'>{userObj.email}</span>
         </div>
       </div>
 
       <div className='card-body'>
         <div className='mb-3'>
           <strong>Startup Idea:</strong>
           <p>{userObj.data}</p>
          
         </div>
         <a href={userObj.linkedIn} target="_blank" rel="noopener noreferrer">

      <Button className="bg-light mb-2 mx-3" style={{ backgroundColor: '#4f545c', border: 'none' }}><span style={{fontWeight: 'bold',color:"#4f545c"}} >LinkedIn</span></Button>
      </a>
         <a href={`mailto:${userObj.email}`} className='btn btn-primary'>Contact</a>
       </div>
 
     </div>
 
   </div>
 )}
 
 </div>
 </div>

)
}

export default TeamUp