import React, { useState } from 'react';
import { usehostalstore } from '../store/hostal.js';
import './Signup.css';

function Signup() {
    const [newAccount, setNewAccount] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { createAccount } = usehostalstore();

    const signup = async () => {
        const { success, message } = await createAccount(newAccount);
        setNewAccount({ name: "", email: "", password: "" });
    };

    return (
      <body>
        
     
        <div className="signup-container">
        <h1>SIGN UP AS STUDENT</h1><br />
            <div className="input-row">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={newAccount.name}
                    id="name"
                    onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
                />
            </div>
            <div className="input-row">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={newAccount.email}
                    id="email"
                    onChange={(e) => setNewAccount({ ...newAccount, email: e.target.value })}
                />
            </div>
            <div className="input-row">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={newAccount.password}
                    id="password"
                    onChange={(e) => setNewAccount({ ...newAccount, password: e.target.value })}
                />
            </div>
            <button type="submit" onClick={signup}>Signup</button>
        </div>
        </body>
    );
}

export default Signup;
