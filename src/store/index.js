import { configureStore, Middleware } from "@reduxjs/toolkit";
import StudentSlice from "./slices/StudentsSlice";

const store = configureStore({
  reducer: { Students: StudentSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const StudentActions = StudentSlice.actions;
export default store;
