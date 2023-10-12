import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUserList } from "../feature/UserService";
import { useEffect, useState } from "react";
import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";

const Update = () => {
  const { users } = useSelector((state) => state?.app);
  console.log(users, "This is a user list");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updatevalue, setUpdateValue] = useState({});
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUpdateValue({
      ...updatevalue,
      [name]: value,
    });
  };

  useEffect(() => {
    if (id) {
      const singleUser = users?.filter((ele) => ele.id === id);
      setUpdateValue(singleUser[0]);
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateUserList(updatevalue));
    localStorage.setItem("userData", JSON.stringify(users));
    navigate("/dashboard");
  };
  return (
    <>
      <Box
        sx={{
          width: "40%",
          margin: "50px",
          borderRadius: "20px",
          backgroundColor: "#d7dad8",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        }}
      >
        <Heading as={"h4"} size={"md"} textAlign={"center"}>
          Update User...
        </Heading>
        <Box sx={{ margin: "20px" }}>
          <form onSubmit={handleSubmit}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={updatevalue?.name ?? ""}
              placeholder="Enter User name"
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={updatevalue?.email ?? ""}
              placeholder="Enter User email"
              onChange={handleChange}
            />
            <br />
            <br />
            <Button colorScheme="teal" type="submit">
              Update User
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Update;
