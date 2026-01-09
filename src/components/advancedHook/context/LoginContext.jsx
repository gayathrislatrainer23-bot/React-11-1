import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function LoginContext() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginContext;
