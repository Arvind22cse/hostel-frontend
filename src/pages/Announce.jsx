import React, { useEffect } from 'react';
import './Announce.css';
import Navbar from './Navbar';
import { usehostalstore } from '../store/hostal.js';

function Announce() {
    const { ann, fetchAnnounce } = usehostalstore();

    useEffect(() => {
        fetchAnnounce();
    }, [fetchAnnounce]);

    return (
        <>
            <Navbar />
            <div className="container">
                {ann.length > 0 ? (
                    ann.map((announce, index) => (
                        <div key={index} className="complaint-card">
                            <p><strong>Announce:</strong> {announce.text}</p>
                    
                        </div>
                    ))
                ) : (
                    <p>No Announce found.</p>
                )}
            </div>
        </>
    );
}

export default Announce;
