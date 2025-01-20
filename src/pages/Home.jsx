import React from "react";
import "./Home.css";
import './Navbar.jsx'
import Navbar from "./Navbar.jsx";
const StudentPage = () => {
  return (
    <>
    <Navbar/>
    <div className="student-page">
      <header className="student-header">
        <h1>Welcome to Hostel Utility Services</h1>
      </header>
      <main className="student-main">
        {/* Carousel Section */}
        <section className="carousel-section">
          <div className="carousel">
            <div className="carousel-track">
              <div className="carousel-image">
                <img
                  src="https://i.redd.it/duality-of-indian-college-hostels-v0-4y5h5tq0j7gd1.jpg?width=4000&format=pjpg&auto=webp&s=ee23425601056d36951951d5f899c9d11f4335d7"
                  alt="Service 1"  id="imge"
                />
              </div>
              <div className="carousel-image">
                <img
                  src="https://5.imimg.com/data5/KD/YS/GLADMIN-9222184/hostal-and-boarding-school.jpg"
                  alt="Service 2"  id="imge"
                />
              </div>
              <div className="carousel-image">
                <img
                  src="https://www.shutterstock.com/image-photo/new-delhi-indiajuly-26-2021-600nw-2016000839.jpg"
                  alt="Service 3"  id="imge"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="student-footer">
        <h3>Warden Details</h3>
        <p>Name:Arvind</p>
        <p>Phone: +91 9876543210</p>
        <p>Email: arvindmurugesan001@gmail.com</p>
      </footer>
    </div>
    </>
  );
};

export default StudentPage;
