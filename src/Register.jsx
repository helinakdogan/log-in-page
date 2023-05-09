import React, { useState } from "react";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            
            <h2>Sign Up</h2>

        <form className="register-form" onSubmit={handleSubmit}>

            <div className="name">Name</div>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Full Name" />
            
            <div className="email">Email</div>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Your Web Address" id="email" name="email" />
            
            <div className="password">Password</div>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
             <br></br>
             
            <button type="submit">Sign In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in here.</button>
    </div>
    )
}