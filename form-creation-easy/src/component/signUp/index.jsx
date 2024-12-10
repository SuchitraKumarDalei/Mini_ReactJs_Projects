import { useState } from "react";
import { signUpFormElements } from "../../config";
import CommonForm from "../common-form";

export default function SignUpComponent(){
    const[signupFormData,setSignupFormData] = useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
    });
    function onHandleSignup(event){
        event.preventDefaut();
        console.log(signupFormData,' : signUp Detail')

        setSignupFormData({
            fname:'',
            lname:'',
            email:'',
            password:'',
        })
    }
    return (
        <div>
            <h1>SignUp Page </h1>
            <div>
                {<CommonForm formControls={signUpFormElements} formData={signupFormData} setFormData={setSignupFormData}
                buttonText={'SignUp'} 
                onHandleSubmit={onHandleSignup} />}
            </div>
        </div>
    );
}