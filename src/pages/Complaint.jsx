import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import './Complaint.css';
import { usehostalstore } from '../store/hostal.js';

function Complaint() {
    const [Complaint, setNewComplain] = useState({
        name: "",
        email: "",
        roomno: "",
        comp: ""
    });

    const { createComplain } = usehostalstore();

    // const Submit = async (e) => {
    //     e.preventDefault(); // Prevent form from submitting in the default way
    //     console.log("Submitting complaint:", Complaint);
    //     const { success, message } = await createComplain(Complaint);
    //     if (success) {
    //         setNewComplain({ name: "", email: "", roomno: "", comp: "" });
    //     } else {
    //         console.error("Error submitting complaint:", message);
    //     }
    // };
    const Submit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        const { success, message } = await createComplain(Complaint);
        if (success) {
            alert("Complaint submitted successfully and email sent!");
            setNewComplain({ name: "", email: "", roomno: "", comp: "" });
        } else {
            alert(`Error: ${message}`);
        }
    };
    

    return (
        <div>
            <Navbar />
            <form className='form'>
                <div className="input-row">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={Complaint.name}
                        onChange={(e) => setNewComplain({ ...Complaint, name: e.target.value })}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={Complaint.email}
                        onChange={(e) => setNewComplain({ ...Complaint, email: e.target.value })}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="roomno">Room No:</label>
                    <input
                        type="text"
                        name="roomno"
                        value={Complaint.roomno}
                        onChange={(e) => setNewComplain({ ...Complaint, roomno: e.target.value })}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="comp">Complaint:</label>
                    <input
                        type="text"
                        name="comp"
                        value={Complaint.comp}
                        onChange={(e) => setNewComplain({ ...Complaint, comp: e.target.value })}
                    />
                </div>
                <button type="button" onClick={Submit}>Submit</button>
            </form>
        </div>
    );
}

export default Complaint;
