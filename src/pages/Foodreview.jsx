import React from 'react';
import { useLocation } from 'react-router-dom';
import './Foodreview.css';

function Review() {
    const location = useLocation();
    const food = location.state?.food;

    if (!food) {
        return <p>No food item selected.</p>;
    }
    const [foodreview, setNewreview] = useState({
        name: "",
        food:"",
        roomno: "",
        feed: "",
    });

    const { createreview } = usehostalstore();

    const Submit = async (e) => {
        e.preventDefault(); // Prevent form from submitting in the default way
        console.log("Submitting review:", foodreview);
        const { success, message } = await createreview(foodreview);
        if (success) {
            setNewComplain({ name: "", food: "", roomno: "", feed: "" });
        } else {
            console.error("Error submitting complaint:", message);
        }
    };



    return (
        <div className="review-container">
            <h2>Review for Food Item: {food.foodname}</h2>
            <p><strong>Time:</strong> {new Date(food.time).toLocaleString()}</p>
            <p><strong>Image:</strong></p>
            <img src={food.img} alt={food.foodname} className="food-image" />
            <form className='form'>
                <div className="input-row">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={foodreview.name}
                        onChange={(e) => setNewreview({ ...foodreview, name: e.target.value })}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="room">Room no:</label>
                    <input
                        type="text"
                        name="room"
                        value={foodreview.room}
                        onChange={(e) => setNewreview({ ...foodreview, room: e.target.value })}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="feed">Feedback:</label>
                    <input
                        type="text"
                        name="feed"
                        value={foodreview.feed}
                        onChange={(e) => setNewreview({ ...foodreview, feed: e.target.value })}
                    />
                </div>
               
                <button type="button" onClick={Submit}>Submit</button>
            </form> 


            {/* Add additional review form or details here */}
        </div>
    );
}

export default Review;
