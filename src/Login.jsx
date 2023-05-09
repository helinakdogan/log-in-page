import React, { useState } from "react";

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">

            <h2>Sign In</h2>

            <form className="login-form" onSubmit={handleSubmit}>

                <div className="email">Email</div>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Your Web Address" id="email" name="email" />
                
                <div className="password">Password</div>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br></br>
                
                <button type="submit">Sign In</button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign up here.</button>
        </div>
    )
}