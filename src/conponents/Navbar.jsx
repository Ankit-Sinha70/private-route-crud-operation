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
        // boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        boxShadow:
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      }}
    >
      {/* <Link to="/">LogIn</Link> */}
      {/* <Link to="/signUp">SignUp</Link> */}
      {localStorage.getItem("isSignIn") ? (
        <PrivateRoute>
          <Link to="/home">
            <Button colorScheme="red" variant="ghost">
              Home
            </Button>
          </Link>
        </PrivateRoute>
      ) : (
        ""
      )}

      {localStorage.getItem("isSignIn") ? (
        <PrivateRoute>
          <Link to="/dashboard">
            <Button colorScheme="red" variant="ghost">
              Dashboard
            </Button>
          </Link>
        </PrivateRoute>
      ) : (
        ""
      )}

      {localStorage.getItem("isSignIn") ? (
        <Button variant="ghost" colorScheme="red" onClick={handleLogOut}>
          LogOut
        </Button>
      ) : (
        <Button variant="ghost">LogIn</Button>
      )}
    </div>
  );
};

export default Navbar;
