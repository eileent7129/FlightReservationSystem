import { useState } from "react";
import axios from 'axios';


function SignUpForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const register = () => {
    axios.post("http://localhost:3001/signup", {
      name: enteredName,
      email: enteredEmail, 
      password: enteredPassword,
      phone_number: enteredPhone,
      date_of_birth: enteredDate

    }).then((response) => {
        console.log(response);
    });
};


  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
      date: enteredDate
    };

    console.log(loginData);
  };

  return (
    // form for login
    <form onSubmit={submitHandler}>
      <div className="form">
        <div className="label">
          <label>First and Last Name:</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="label">
          <label>Email:</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className="label">
          <label>Password:</label>
          <input
            type="text"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className="label">
          <label>Phone Number:</label>
          <input
            type="text"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="label">
          <label>Date of Birth:</label>
          <input
            type="date"
            min="1960-01-01"
            max="2010-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="submitButton">
          <button type="submit" onClick={register}>Register</button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
