import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("isSignIn");
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        fontSize: "20px",
        margin: "20px 50px 20px 50px",
        padding: "10px",
        borderRadius: "30px",
        backgroundColor: "#d7dad8",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      }}
    >
      {/* <Link to="/">LogIn</Link> */}
      {/* <Link to="/signUp">SignUp</Link> */}
      {localStorage.getItem("isSignIn") ? (
        <PrivateRoute>
          <Button colorScheme="teal" variant="ghost">
            <Link to="/home">Home</Link>
          </Button>
        </PrivateRoute>
      ) : (
        ""
      )}

      {localStorage.getItem("isSignIn") ? (
        <PrivateRoute>
          <Button colorScheme="teal" variant="ghost">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </PrivateRoute>
      ) : (
        ""
      )}

      {localStorage.getItem("isSignIn") ? (
        <Button variant="ghost" colorScheme="teal" onClick={handleLogOut}>
          LogOut
        </Button>
      ) : (
        <Button variant="ghost">LogIn</Button>
      )}
    </div>
  );
};

export default Navbar;
