import React from "react";
import "./Admin.css";
import Navbar from "./Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const WardenPage = () => {
  const services = [
    {
      title: "Maintenance Requests",
      phone: "+91 9876543210",
      email: "maintenance@hostel.com",
    },
    {
      title: "Cleaning Services",
      phone: "+91 8765432109",
      email: "cleaning@hostel.com",
    },
    {
      title: "Electrical Repairs",
      phone: "+91 7654321098",
      email: "electrical@hostel.com",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="warden-page">
        <header className="warden-header">
          <h1>WELCOME</h1>
        </header>
        <main className="warden-main">
          {/* Carousel Section */}
          <section className="carousel-section">
            <div className="carousel">
              <div className="carousel-track">
                <div className="carousel-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQl0Ni5Na7YrsyxrfU_YHAYLuHy48g6JlBA&s"
                    alt="Hostel 1"
                  />
                </div>
                <div className="carousel-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRWcTadY1ikboz9Iu3RiXGlcuLVg6bzFIoA&s"
                    alt="Hostel 2"
                  />
                </div>
                <div className="carousel-image">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2024/6/430588934/OF/GP/US/187348836/hostel-construction-500x500.jpg"
                    alt="Hostel 3"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="services-section">
            <h2>Service Contacts</h2>
            <div className="services">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <h3>{service.title}</h3>
                  <p>
                    <strong>Phone:</strong> {service.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {service.email}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="warden-footer">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WardenPage;
