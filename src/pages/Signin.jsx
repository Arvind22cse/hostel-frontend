import React, { useState } from 'react';
import { usehostalstore } from '../store/hostal.js';
import './Signin.css';

function Signin() {
    const [account, setAccount] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const { signInAccount } = usehostalstore();

    const signIn = async () => {
        const response = await signInAccount(account);
        console.log('Response from sign-in:', response);
        const { success, message, isAdmin } = response;
        setMessage(message);
        console.log(message);
        
        
        if (success) {
          
                window.location.href = "/home"; // Redirect to admin page for admins
           
        } else {
            setAccount({ email: "", password: "" });
        }
    };
    
    
    

    return (
        <div className="signin-container">
            <h1>SIGN IN AS STUDENT</h1><br />
            <div className="input-row">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={account.email}
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => setAccount({ ...account, email: e.target.value })}
                />
            </div>
            <div className="input-row">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={account.password}
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e) => setAccount({ ...account, password: e.target.value })}
                />
            </div>
            <button type="button" onClick={signIn}>SIGN IN</button>
            {message && <p className="message">{message}</p>}
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    );
}

export default Signin;
