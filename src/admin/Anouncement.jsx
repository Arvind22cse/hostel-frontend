import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
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
            setNewannounce({ text:""}); // Clear the text field after submission
        } else {
            console.error("Error submitting complaint:", message);
        }
    };

    return (
        <div>
            <Navbar />
            <form
                className='form'
                style={{
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    padding: '2rem',
                    maxWidth: '500px',
                    margin: '3rem auto',
                }}
            >
                <div
                    className="input-row"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '1.5rem',
                    }}
                >
                    <label
                        htmlFor="announce"
                        style={{
                            marginRight: '10px',
                            fontSize: '1.1rem',
                            color: '#333',
                            marginBottom: '0.5rem',
                        }}
                        className='head'
                    >
                        Announce:
                    </label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        value={announce.text}
                        onChange={(e) => setNewannounce({ ...announce, text: e.target.value })}
                        style={{
                            height:"90%",
                            padding: '0.8rem',
                            fontSize: '1rem',
                            border: '1px solid grey',
                            borderRadius: '8px',
                            outline: 'none',
                            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        }}
                    />
                </div>

                <button
                    type="button"
                    onClick={Submit}
                    style={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        padding: '0.8rem 2rem',
                        fontSize: '1.1rem',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, background-color 0.3s ease',
                        width: '100%',
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Announcement;
