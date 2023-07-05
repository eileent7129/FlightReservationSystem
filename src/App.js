import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CustomerLogin from "./pages/Customer/CustomerLogin";
import CustomerSignUp from "./pages/Customer/CustomerSignUp";
import CustomerDashboard from "./pages/Customer/CustomerDashboard";
import StaffLogin from "./pages/AirlineStaff/StaffLogin";
import StaffSignUp from "./pages/AirlineStaff/StaffSignUp";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/customer-login", element: <CustomerLogin /> },
      { path: "/customer-signup", element: <CustomerSignUp /> },
      { path: "/customer-dashboard", element: <CustomerDashboard /> },
      { path: "/staff-login", element: <StaffLogin /> },
      { path: "/staff-signup", element: <StaffSignUp /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;