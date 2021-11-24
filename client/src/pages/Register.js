import React, {useState} from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import {toast} from "react-hot-toast";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async (e) => {
        //console.log(name, email, password);
        try {
            e.preventDefault();
            const {data} = await axios.post("http://localhost:8000/api/register", {
                name,
                email,
                password,
            });
            console.log(data)

            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success("Registration successful. Please log in!");
            }
        } catch (err) {
            console.log(err)
            toast.error("Something wrong. Try again!");
        }
    };

    return (
        <div className="d-flex justify-content-center" style={{ height: "80vh"}}>
<div className="container align-items-center d-flex">
<div className="row col-md-6 offset-md-3 text-center">
<h1 className="pt-5 fw-bold">Register</h1>
<p className="lead pb-4">.....</p>

<div className="form-group">
    <Input label = "Name" value={name} setValue={setName} />
    <Input 
    label = "Email"
    type = "email"
    value={email} 
    setValue={setEmail} />
    <Input 
    label = "Password" 
    type = "password"
    value={password} 
    setValue={setPassword} />

    <Button 
    handleClick={handleClick} 
    type="danger" 
    text="Register"
    size="sm" />

</div>
</div>
 </div>
 </div>
    );
};

export default Register;