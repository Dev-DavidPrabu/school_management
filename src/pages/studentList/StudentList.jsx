import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StudentActions } from "../../store";
import StudentService from "../../services/StudentService";
import { useErrorHandler } from "react-error-boundary";

const StudentList = () => {
  const dispatch = useDispatch();
  const handleError = useErrorHandler();
  const Students = useSelector((state) => state.Students);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    StudentService.FetchStudents(dispatch, handleError);
    setLoading(false);
  }, []);

  const RemoveStudent = (id) => {
    dispatch(StudentActions.deleteStudents(id));
    StudentService.FetchStudents(dispatch, handleError);
  };

  return (
    <>
      <div className="mt-3">
        {Students &&
          (Students.length > 0 ? (
            <>
              <Table striped bordered hover className="mt-3 bg-light rounded">
                <thead>
                  <tr className="text-center">
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Course</th>
                    <th>Staff</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Students.map((Student, i) => (
                    <tr
                      key={i}
                      className="align-middle text-center text-capitalize"
                    >
                      <td>{i + 1}</td>
                      <td>{Student.name}</td>
                      <td>{Student.email}</td>
                      <td>{Student.dob.split("-").reverse().join("-")}</td>
                      <td>{Student.coursename}</td>
                      <td>{Student.staff}</td>
                      <td className="d-flex justify-content-around">
                        <Link
                          className="btn btn-primary"
                          to={`/edit/${Student.id}`}
                          title="Edit Student"
                        >
                          Edit
                        </Link>
                        <Button
                          onClick={() => RemoveStudent(Student.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (
            <h3 className="fw-light text-center">
              {loading ? "Loading..." : "No Student Found"}
            </h3>
          ))}
      </div>
    </>
  );
};

export default StudentList;
