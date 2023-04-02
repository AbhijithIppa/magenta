import React from "react";
import "./Login.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Login() {
  let Mentor = () => {
    navigate("/mentor");
  };

  let Investor = () => {
    navigate("/investor");
  };

  let [error, setError] = useState("");
  const navigate = useNavigate();

  const navigateToMentor = () => {
    navigate("/men_login");
  };
  const navigateToOne=()=>{
    navigate("/one");
  }
  const navigateToInv = () => {
    navigate("/inv_login");
  };

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let Login = (newUser) => {
    axios
      .post("http://localhost:4000/users", newUser)
      .then((response) => {
        console.log("response is", response);
        if (response.status === 201) {
          navigate("/home");
        }
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
    <div
      style={{
        backgroundColor: "#36393f",
        padding: "20px",
        fontFamily: "sans-serif",
        height: "100%",
      }}
    >
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
            {/* <Button
                className="mx-auto"
                variant="outline-success"
                onClick={navigateToInv}
                style={{ marginLeft: "auto", fontWeight: "bold" }}
              >
                Home
              </Button> */}
              <Button
                variant="outline-success"
                onClick={navigateToInv}
                style={{ marginLeft: "auto", fontWeight: "bold" }}
              >
                Investor/Mentor Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: "20px" }} className="container"></div>

      <Form
        className="container"
        onSubmit={handleSubmit(Login)}
        style={{ marginTop: "20px", color: "#fff" }}
      >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold", color: "#fff" }}>
            Enter UserName
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter UserName"
            {...register("name", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold", color: "#fff" }}>
            Email address
          </Form.Label>
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
          <Form.Label style={{ fontWeight: "bold", color: "#fff" }}>
            Enter LinkedIn
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter LinkedIn"
            {...register("linkedIn", { required: true })}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold", color: "#fff" }}>
            Enter Skills
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Skills"
            {...register("skills", { required: true })}
          />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold", color: "#fff" }}>
            Enter ImageURL
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ImageURL"
            {...register("image", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold", color: "#fff" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </Form.Group>

        <Container style={{ marginTop: "50px" }}>
          <Row className=" mt-5">
            <Col md={6}>
              <Form onSubmit={handleSubmit(Login)}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>
                    <b style={{ fontWeight: "bold", color: "#fff" }}>
                      Describe Your Idea Here.....
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    {...register("data", { required: true })}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className=" mt-3 text-center"></Row>
        </Container>

        <Button
          variant="success"
          type="submit"
          style={{ marginTop: "20px", fontWeight: "bold" }}
        >
          Submit
        </Button>
      </Form>

      <div></div>
    </div>
  );
}

export default Login;
