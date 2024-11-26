import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import './Food.css';
import { usehostalstore } from '../store/hostal.js';

function Food() {
    const [Food, setNewFood] = useState({
        foodname: "",
        time: "",
        img: "",
        
    });

    const { createFood } = usehostalstore();

    const Submit = async (e) => {
        e.preventDefault(); // Prevent form from submitting in the default way
        console.log("Submitting Food:", Food);
        const { success, message } = await createFood(Food);
        if (success) {
            setNewFood({ foodname: "", time: "", img: "" });
        } else {
            console.error("Error submitting complaint:", message);
        }
    };

    return (
        <div>
            <Navbar />
            <form className='form'>
                <div className="input-row">
                    <label htmlFor="foodname">Foodname:</label>
                    <input
                        type="text"
                        name="foodname"
                        id="name"
                        value={Food.foodname}
                        onChange={(e) => setNewFood({ ...Food, foodname: e.target.value })}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="time">Time:</label>
                    <input
                        type="datetime-local"
                        name="time"
                        value={Food.time}
                        onChange={(e) => setNewFood({ ...Food, time: e.target.value })}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="img">Image:</label>
                    <input
                        type="text"
                        name="img"
                        value={Food.img}
                        onChange={(e) => setNewFood({ ...Food, img: e.target.value })}
                    />
                </div>
                
                <button type="button" onClick={Submit}>Submit</button>
            </form>
        </div>
    );
}

export default Food;
