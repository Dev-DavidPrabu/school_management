import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useErrorHandler } from "react-error-boundary";
import { StudentActions } from "../../store";
import StudentService from "../../services/StudentService";

const AddStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleError = useErrorHandler();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [course, setCourse] = useState("");
  const [staff, setStaff] = useState("");

  useEffect(() => {
    StudentService.FetchStudents(dispatch, handleError);
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      email,
      dob,
      course,
      staff,
    };

    dispatch(StudentActions.addStudents(newStudent));
    StudentService.FetchStudents(dispatch, handleError);
    navigate("/", { replace: true });
  };

  return (
    <>
      <Container>
        <Row
          style={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Col md={4}>
            <h3 className="text-center fw-light">Add Student</h3>
            <Form
              onSubmit={formSubmit}
              className="p-5 border border-secondary rounded"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  maxLength={20}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email Id</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  maxLength={10}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  type="date"
                  value={dob}
                  maxLength={10}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="Enter DOB"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="Enter Course Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={staff}
                  onChange={(e) => setStaff(e.target.value)}
                  placeholder="Enter Staff"
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="primary" data-testid="addBtn" type="submit">
                  Add Student
                </Button>

                <Link to="/">
                  <Button
                    variant="warning"
                    data-testid="cancelBtn"
                    type="button"
                  >
                    Cancel
                  </Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddStudent;
