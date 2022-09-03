import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../../components/Heading";
import StudentList from "../studentList/StudentList";

const Home = () => {
  return (
    <div>
      <Container className="mt-5">
        <h2 className="text-center">School Mangement System</h2>
        <Heading />

        <StudentList />
      </Container>
    </div>
  );
};
export default Home;
