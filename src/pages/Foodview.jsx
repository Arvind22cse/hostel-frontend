import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { usehostalstore } from '../store/hostal.js';
import './FoodView.css';

function FoodView() {
    const { food, fetchfood } = usehostalstore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchfood(); // Fetch food data on component load
    }, [fetchfood]);

    // Function to handle navigation to review page with food item data
    const handleReviewClick = (foodItem) => {
        navigate('/review', { state: { food: foodItem } }); // Pass food item data as state
    };

    return (
        <div>
            <Navbar />
            <div className="food-table-container">
                <h2>Food List</h2>
                <table className="food-table">
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Time</th>
                            <th>Image</th>
                            {/* <th>Review</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {food && food.length > 0 ? (
                            food.map((foods, index) => (
                                <tr key={index}>
                                    <td>{foods.foodname}</td>
                                    <td>{new Date(foods.time).toLocaleString()}</td>
                                    <td>
                                        <img src={foods.img} alt={foods.foodname} className="food-image" style={{width:"50px"}} />
                                    </td>
                                    {/* <td>
                                        <button
                                            type="button"
                                            onClick={() => handleReviewClick(foods)} // Pass full food item data
                                        >
                                            Review
                                        </button> 
                                    </td> */}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No food items found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FoodView;
