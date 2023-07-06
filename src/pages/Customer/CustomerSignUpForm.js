import { useState } from "react";
import validation from "../SignUpValidation";
import {useNavigate} from "react-router-dom";
import axios from 'axios';


function CustomerSignUpForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredPassNum, setEnteredPassNum] = useState("");
  const [enteredPassExp, setEnteredPassExp] = useState("");
  const [enteredPassCountry, setEnteredPassCountry] = useState("");
  const [enteredDOB, setEnteredDOB] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

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

  const passNumChangeHandler = (event) => {
    setEnteredPassNum(event.target.value);
  };

  const passExpChangeHandler = (event) => {
    setEnteredPassExp(event.target.value);
  };

  const passCountryChangeHandler = (event) => {
    setEnteredPassCountry(event.target.value);
  };

  const dobChangeHandler = (event) => {
    setEnteredDOB(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      phone_number: enteredPhone,
      passport_number: enteredPassNum,
      passport_exp_date: enteredPassExp,
      passport_country: enteredPassCountry,
      date_of_birth: enteredDOB
    };

    setErrors(validation(loginData));

    if(errors.name === "" && errors.email === "" && errors.password === ""){
      axios.post("http//localhost:3000/customer-signup", loginData)
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
          <label>First and Last Name:</label>
          <input 
            type="text" 
            value={enteredName} 
            name="name"
            onChange={nameChangeHandler} 
            />
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="label">
          <label>Email:</label>
          <input
            type="text"
            value={enteredEmail}
            name="email"
            onChange={emailChangeHandler}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="label">
          <label>Password:</label>
          <input
            type="text"
            value={enteredPassword}
            name="password"
            onChange={passwordChangeHandler}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div className="label">
          <label>Phone Number:</label>
          <input
            type="text"
            value={enteredPhone}
            name="phone_number"
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="label">
          <label>Passport Number:</label>
          <input
            type="text"
            value={enteredPassNum}
            name="passport_number"
            onChange={passNumChangeHandler}
          />
        </div>
        <div className="label">
          <label>Passport Expiration Date:</label>
          <input
            type="date"
            min="2020-01-01"
            max="2030-12-31"
            value={enteredPassExp}
            name="passport_exp_date"
            onChange={passExpChangeHandler}
          />
        </div>
        <div className="label">
          <label>Passport Country:</label>
          <input
            type="text"
            value={enteredPassCountry}
            name="passport_country"
            onChange={passCountryChangeHandler}
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
        <div className="submitButton">
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  );
}

export default CustomerSignUpForm;
