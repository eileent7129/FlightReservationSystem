import { Outlet } from "react-router-dom";
import classes from "./Root.module.css";
import NavBar from "../components/NavBar/NavBar";

function RootLayout() {
  return (
    <>
      {/* <h1>Root Layout</h1> */}
      <NavBar />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
