import { loginFormElements } from "../../config";
import CommonForm from "../common-form";
import { useState } from "react";


export default function LoginComponent(){

    const [loginFormData,setLoginFormData] = useState({
        email:'',
        password:'',
    })
    function onHandleSubmit(event){
        event.preventDefault();
        console.log(loginFormData,'Login Data');

        setLoginFormData({
            email:'',
            password:'',
        })
    }

    return (
        <div>
            <h1>Login Page </h1>
            <CommonForm 
            formControls={loginFormElements} 
            formData={loginFormData}
            setFormData={setLoginFormData}
            buttonText={'Login'} 
            onHandleSubmit={onHandleSubmit} />
        </div>
    );
}