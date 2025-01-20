import React, { useEffect } from 'react';
import './Hostellers.css';
import Navbar from './Navbar';
import { usehostalstore } from '../store/hostal.js';

function Hostellers() {
    const { stud, fetchstud } = usehostalstore();

    useEffect(() => {
        fetchstud(); // Fetch complaints when component mounts
    }, [fetchstud]);

    return (
        <>
            <Navbar />
            <div className="container">
                {stud.length > 0 ? (
                    stud.map((studs, index) => (
                        <div key={index} className="complaint-card">
                            <p><strong>Name:</strong> {studs.name}</p>
                            <p><strong>Email:</strong> {studs.email}</p>

                        </div>
                    ))
                ) : (
                    <p>No students found.</p>
                )}
            </div>
        </>
    );
}

export default Hostellers;
