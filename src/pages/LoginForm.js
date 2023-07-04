import {useState} from "react";
import axios from 'axios';


function LoginForm(props) {

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        axios.post("http://localhost:3001/login", {
          email: enteredEmail, 
          password: enteredPassword
    
        }).then((response) => {

            if(response.data.message){
                setLoginStatus(response.data.message);
            }
            else {
                setLoginStatus(response.data[0].email);
            }
            console.log(response.data);
        });
    };
    
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

    };


    return (
        // form for login
        <form class="login">
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
            <button onClick={login} type="submit">Login</button>
        </div>
        <h1>{loginStatus}</h1>
        </div>
        
    </form>


    );
}

export default LoginForm;