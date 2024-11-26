import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import './Food.css';
import { usehostalstore } from '../store/hostal.js';

function Announcement() {
    const [announce, setNewannounce] = useState({
       text:""
        
    });

    const { createAnnounce } = usehostalstore();

    const Submit = async (e) => {
        e.preventDefault(); // Prevent form from submitting in the default way
        console.log("Submitting Food:", announce);
        const { success, message } = await createAnnounce(announce);
        if (success) {
            setNewannounce({ text:""});
        } else {
            console.error("Error submitting complaint:", message);
        }
    };

    return (
        <div>
            <Navbar />
            <form className='form'>
                <div className="input-row">
                    <label htmlFor="announce">Announcement:</label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        value={announce.text}
                        onChange={(e) => setNewannounce({ ...announce,text: e.target.value })}
                    />
                </div>
               
                
                <button type="button" onClick={Submit}>Submit</button>
            </form>
        </div>
    );
}

export default Announcement;
