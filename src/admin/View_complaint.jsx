import React, { useEffect } from 'react';
import './View_complaint.css';
import Navbar from './Navbar';
import { usehostalstore } from '../store/hostal.js';

function View_complaint() {
    const { comp, fetchComplaints } = usehostalstore();

    useEffect(() => {
        fetchComplaints(); // Fetch complaints when component mounts
    }, [fetchComplaints]);

    return (
        <>
            <Navbar />
            <div className="container">
                {comp.length > 0 ? (
                    comp.map((complaint, index) => (
                        <div key={index} className="complaint-card">
                            <p><strong>Name:</strong> {complaint.name}</p>
                            <p><strong>Email:</strong> {complaint.email}</p>
                            <p><strong>Room No:</strong> {complaint.roomno}</p>
                            <p><strong>Complaint:</strong> {complaint.comp}</p>
                        </div>
                    ))
                ) : (
                    <p>No complaints found.</p>
                )}
            </div>
        </>
    );
}

export default View_complaint;
