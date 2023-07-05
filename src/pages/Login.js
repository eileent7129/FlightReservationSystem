import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/customer-login"> Customer Login</Link>
      </p>
      <p>
        Go to <Link to="/staff-login"> Staff Login</Link>
      </p>
    </>
  );
}

export default Login;