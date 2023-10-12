import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";

const LogIn = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = localStorage.getItem("token");
    const data = JSON.parse(value);
    if (
      inputValue?.email == data?.username &&
      inputValue?.password == data?.password
    ) {
      localStorage.setItem("isSignIn", true);
      navigate("/home");
    } else {
      alert("password or email is incorrect");
    }
  };
  return (
    <>
      <Box
        sx={{
          margin: "50px",
          padding: "30px",
          width: "40%",
          borderRadius: "25px",
          backgroundColor: "#d7dad8",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        }}
      >
        <Heading as={"h5"}>LogIn Page..</Heading>

        <Box sx={{ margin: "60px", width: "50%" }}>
          <form onSubmit={handleSubmit}>
            <FormLabel>Username</FormLabel>
            <Input
              variant='flushed'
              type="text"
              name="email"
              placeholder="Enter your username"
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Password</FormLabel>
            <Input
              variant='flushed'
              type="text"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            <br />
            <br />
            <Button colorScheme="green" type="submit">Submit</Button>
          </form>
          <Link to="/signUp" color="blue">Signup new Account..?</Link>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
