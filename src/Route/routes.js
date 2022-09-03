import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AddStudent from "../pages/addStudent/AddStudent";
import EditStudent from "../pages/editStudent/EditStudent";

const Home = lazy(() => import("../pages/home/Home"));

const routes = (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<h4 className="text-center">Still Loading…</h4>}>
          <Home />
        </Suspense>
      }
    />
    <Route path="/add" element={<AddStudent />} />
    <Route path="/edit/:id" element={<EditStudent />} />
  </Routes>
);

export default routes;
