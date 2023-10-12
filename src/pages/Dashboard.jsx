import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserList, displayUserData } from "../feature/UserService";
import { Link } from "react-router-dom";
import { Box, Button, ButtonGroup, Heading } from "@chakra-ui/react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(displayUserData());
  }, []);
  return (
    <>
      <Box style={{ margin: "50px" }}>
        <Heading as={"h4"} size={"md"}>
          UserLists...
        </Heading>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            margin: "50px 50px 50ox 50px",
          }}
        >
          {users?.map((item) => {
            return (
              <Box
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#d7dad8",
                  padding: "15px",
                  margin: "5px",
                  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                }}
                key={item.id}
              >
                <Heading as={"h5"} size={"md"}>
                  Name- {item.name}
                </Heading>
                <Heading as={"h5"} size={"md"}>
                  Email- {item.email}
                </Heading>
                <br />
                <ButtonGroup spacing={3}>
                  <Button
                    colorScheme="red"
                    onClick={() => dispatch(deleteUserList(item.id))}
                  >
                    delete
                  </Button>
                  <Link to={`/edit/${item.id}`}>
                    <Button colorScheme="green">edit</Button>
                  </Link>
                </ButtonGroup>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
