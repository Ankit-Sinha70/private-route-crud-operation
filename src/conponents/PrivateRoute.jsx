import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isSignIn = JSON.parse(localStorage.getItem("isSignIn"));
  let navigate = useNavigate();

  useEffect(() => {
    if (!isSignIn) {
      navigate("/");
    }
  }, []);

  return children;
}

export default PrivateRoute;