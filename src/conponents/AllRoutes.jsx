import React from "react";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LogIn from "../pages/LogIn";
import Update from "../pages/Update"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route exact path="/edit/:id" element={<Update/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
