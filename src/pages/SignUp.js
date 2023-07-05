import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/customer-signup"> Customer Sign Up</Link>
      </p>
      <p>
        Go to <Link to="/staff-signup"> Staff Sign Up</Link>
      </p>
    </>
  );
}

export default SignUp;