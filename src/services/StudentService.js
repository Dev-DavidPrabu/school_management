import axios from "axios";
import { StudentActions } from "../store";
const API_URL = process.env.REACT_APP_API_URL;

const FetchStudents = (dispatch, handleError) => {
  axios
    .get(`${API_URL}/student`)
    .then((_res) => {
      dispatch(StudentActions.getStudents(_res));
    })
    .catch((_err) => {
      handleError(_err);
    });
};

const AddStudent = (content) => {
  axios
    .post(`${API_URL}/student`, content)
    .then((data) => console.log(data))
    .then((res) => {
      console.log(res);
      alert("Student Added Successfully !!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const EditStudent = (updatedStudent) => {
  axios
    .patch(`${API_URL}/student/${updatedStudent.id}`, updatedStudent)
    .then((_res) => {
      alert("Student Updated Successfully !!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const DeleteStudent = (id) => {
  axios.delete(`${API_URL}/student/${id}`).then((_res) => {
    alert("Student Deleted Successfully !!");
  });
};

const StudentService = {
  FetchStudents,
  AddStudent,
  EditStudent,
  DeleteStudent,
};
export default StudentService;
