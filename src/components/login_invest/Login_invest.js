import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
function Login_invest() {
  let [error, setError] = useState("");
  const navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigateToLogin= () => {
    navigate("/login");
  };

  let Login = (newUser) => {
    axios
      .post("http://localhost:5000/inv_users", newUser)
      .then((response) => {
        console.log("response is", response);
        // if (response.status===201){
        navigate("/inv_req");
        // }
      })
      .catch((err) => {
        console.log("error is", errors);
        if (err.response) {
          setError(err.message);
        } else if (err.request) {
          setError(err.message);
        } else {
          setError(err.message);
        }
      });
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ fontWeight: "bold", fontSize: "24px", color: "#fff" }}
          >
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
              <Button
                variant="outline-success"
                style={{ marginLeft: "auto", fontWeight: "bold" }}
                onClick={navigateToLogin}
              >
                User Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container mt-4">
        <Form className="container" onSubmit={handleSubmit(Login)}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter UserName"
              {...register("name", { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="text-danger fw-bold fs-5">*Email required</p>
            )}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>LinkedIn ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter LinkedIn ID"
              {...register("linkedIn", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>ImageURL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ImageURL"
              {...register("image", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Projects Sponsered</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Projects Sponsered"
              {...register("experience", { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login_invest;
