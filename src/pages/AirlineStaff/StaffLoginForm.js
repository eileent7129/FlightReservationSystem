import {useState} from "react";
import axios from 'axios';
import validation from "../SignUpValidation";
import {useNavigate} from "react-router-dom";


function StaffLoginForm(props) {

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const loginData = {
            email: enteredEmail,
            password: enteredPassword
        };

        console.log(loginData);

        setErrors(validation(loginData));

        if(errors.email === "" && errors.password === ""){
            axios.post("http//localhost:3000/login", loginData)
            .then(res => {
                if(res.data === "Success"){
                    navigate("/staff-dashboard");
                  }
                  else {
                    alert("No record existed");
                  }
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
            <label>Email:</label>
            <input 
            type="text"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            />
        </div>
        <div className="label">
            <label>Password:</label>
            <input 
            type="text"
            name="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            />
        </div>
        <div className="submitButton">
            <button type="submit">Login</button>
        </div>
        </div>
        
    </form>


    );
}

export default StaffLoginForm;