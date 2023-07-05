import { useState } from "react";
import validation from "../SignUpValidation";
import {useNavigate} from "react-router-dom";
import axios from 'axios';


function StaffSignUpForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredAirline, setEnteredAirline] = useState("");
  const [enteredDOB, setEnteredDOB] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const airlineChangeHandler = (event) => {
    setEnteredAirline(event.target.value);
  };

  const dobChangeHandler = (event) => {
    setEnteredDOB(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
      fname: enteredFirstName,
      lname: enteredLastName,
      airline_name: enteredAirline,
      date_of_birth: enteredDOB
    };

    setErrors(validation(loginData));

    if(errors.name === "" && errors.email === "" && errors.password === ""){
      axios.post("http//localhost:3000/signup", loginData)
      .then(res => {
        navigate("/");
        console.log(res.data);
      })
      .catch(err => console.log(err));
    }

    console.log(loginData);
  };

  return (
    // form for login
    <form method="POST" action="" onSubmit={submitHandler}>
      <div className="form">
        <div className="label">
          <label>username:</label>
          <input 
            type="text" 
            value={enteredUsername} 
            name="username"
            onChange={usernameChangeHandler} 
            />
            {errors.username && <span>{errors.username}</span>}
        </div>
        <div className="label">
          <label>email:</label>
          <input
            type="text"
            value={enteredEmail}
            name="email"
            onChange={emailChangeHandler}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="label">
          <label>password:</label>
          <input
            type="text"
            value={enteredPassword}
            name="password"
            onChange={passwordChangeHandler}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div className="label">
          <label>phone number:</label>
          <input
            type="text"
            value={enteredPhone}
            name="phone_number"
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="label">
          <label>First Name:</label>
          <input
            type="text"
            value={enteredFirstName}
            name="fname"
            onChange={firstNameChangeHandler}
          />
        </div>
        <div className="label">
          <label>Last Name:</label>
          <input
            type="text"
            value={enteredLastName}
            name="lname"
            onChange={lastNameChangeHandler}
          />
        </div>
        <div className="label">
          <label>Date of Birth:</label>
          <input
            type="date"
            min="1960-01-01"
            max="2010-12-31"
            name="date_of_birth"
            value={enteredDOB}
            onChange={dobChangeHandler}
          />
        </div>
        <div className="label">
          <label>Airline:</label>
          <input
            type="text"
            name="airline_name"
            value={enteredAirline}
            onChange={airlineChangeHandler}
          />
        </div>
        <div className="submitButton">
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  );
}

export default StaffSignUpForm;
