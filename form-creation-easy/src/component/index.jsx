import { useState } from "react";

export default function FormComponent() {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const[formData,setFormData] = useState({
        name:'',
        value:'',
    })
    // function clickToChange(event) {
    // //     console.log(event);
    // //     setNameValue(event.target.value);
    // // }
    // // function handleEmail(event){
    // //     setEmailValue(event.target.value);
    // // }
    function handleOnChange(event){
        
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    }
    function handleSubmit(event){
        event.preventDefault();

        console.log("Name value : ",nameValue,"email value : ",emailValue,);
    }
    console.log(formData);
    return (
        <div>
            <h1>Form Creation</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" value={formData.name} placeholder="Enter your name" onChange={handleOnChange} />

                <input type="email" name="email" id="emailId" value={formData.email} placeholder="Enter your Email" onChange={handleOnChange} />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}