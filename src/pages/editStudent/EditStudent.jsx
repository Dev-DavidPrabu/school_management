import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import StudentService from "../../services/StudentService";
import { StudentActions } from "../../store";

const EditStudent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Students = useSelector((state) => state.Students);

  const [filter, setFilter] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    email: "",
    dob: "",
    coursename: "",
    staff: "",
  });

  useEffect(() => {
    StudentService.FetchStudents(dispatch);

    const currentStudent =
      Array.isArray(Students) && Students.find((Student) => Student.id === id);
    setCurrentUser(currentStudent);
    setFilter(true);
  }, []);

  const handleChange = (key, value) => {
    setCurrentUser({ ...currentUser, [key]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(StudentActions.editStudents(currentUser));
    StudentService.FetchStudents(dispatch);
    navigate("/");
  };
  return (
    <>
      <Container>
        <Row
          style={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Col md={4}>
            <h3 className="text-center fw-light">Edit Student</h3>
            {filter && (
              <Form
                onSubmit={formSubmit}
                className="p-5 border border-secondary rounded"
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Student Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUser.name}
                    maxLength={20}
                    onChange={(e) => handleChange("ename", e.target.value)}
                    placeholder="Enter Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUser.email}
                    maxLength={10}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Enter Email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>DOB</Form.Label>
                  <Form.Control
                    type="date"
                    // value={
                    //   new Date(currentUser.dob.split("-").reverse().join("-"))
                    // }
                    value="09/08/2022"
                    placeholder="Enter DOB"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUser.coursename}
                    onChange={(e) => handleChange("location", e.target.value)}
                    placeholder="Enter Course Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Staff</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUser.staff}
                    onChange={(e) => handleChange("location", e.target.value)}
                    placeholder="Enter Staff Name"
                  />
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit">
                    Edit Student
                  </Button>

                  <Link to="/">
                    <Button variant="warning" type="button">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditStudent;
