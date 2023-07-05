import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className={classes.header}>
      <nav class> 
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>  
          <li>
            <Link to="/customer-dashboard">My Dashboard</Link>
          </li> 
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;