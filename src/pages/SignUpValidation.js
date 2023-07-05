function validation(values) {

    let error = {};

    if(values.name === ""){
        error.name = "Name is required";
    }
    else if (values.email === ""){
        error.email = "Email is required";

    }
    else if (values.password === ""){
        error.password = "Password is required";
    }

    return error;
}

export default validation;