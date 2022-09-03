import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StudentService from "../../services/StudentService";

const initialState = {};

const StudentSlice = createSlice({
  name: "Students",
  initialState: initialState,
  reducers: {
    getStudents(_state, action) {
      return action.payload.data;
    },
    addStudents(_state, action) {
      let content = action.payload;
      StudentService.AddStudent(content);
    },
    editStudents(_state, action) {
      let content = action.payload;
      StudentService.EditStudent(content);
    },

    deleteStudents(_state, action) {
      let id = action.payload;
      StudentService.DeleteStudent(id);
    },
  },
});

export default StudentSlice;
