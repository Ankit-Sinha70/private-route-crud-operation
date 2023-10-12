import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserlist } from "../feature/UserService";
import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";

const Home = () => {
  const { users } = useSelector((state) => state.app);
  console.log(users, "This is a user list");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserlist(input));
    localStorage.setItem("userData", JSON.stringify(users));
    navigate("/dashboard");
  };
  return (
    <>
      <Box
        sx={{
          padding: "20px",
          margin: "50px",
          width: "40%",
          backgroundColor: "#d7dad8",
          borderRadius: "30px",
          // boxShadow:
          //   "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          boxShadow: "rgba(0, 0, 0, 0.66) 0px 22px 70px 4px"
        }}
      >
        <Heading as={"h6"} size={"lg"} textAlign={"center"}>
          Add UserList...
        </Heading>
        <Box sx={{ padding: "100px" }}>
          <form onSubmit={handleSubmit}>
            <FormLabel>Name</FormLabel>
            <Input
              required
              variant="flushed"
              type="text"
              name="name"
              value={input.name}
              placeholder="Enter User name"
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Email</FormLabel>
            <Input
              required
              variant="flushed"
              type="email"
              name="email"
              value={input.email}
              placeholder="Enter User email"
              onChange={handleChange}
            />
            <br />
            <br />
            <Button colorScheme="teal" type="submit">
              Add User
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Home;
