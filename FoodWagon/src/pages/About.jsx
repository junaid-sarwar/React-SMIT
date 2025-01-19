import React from "react";
import "../../assets/css/about.css";
import FoodTruckPic from "../../assets/images/LOGO/food-logo.jpg";
import FounderPic from "../../assets/images/Founder-Image/founder-check.jpg"
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <Header/>
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Foodwagon</h1>
        <p className="about-description">
          At <span className="brand-name">Foodwagon</span>, we’re dedicated to connecting you with the best meals in your area.
          Whether you're craving something spicy, sweet, or savory, we’ve got you covered.
        </p>
        <p className="about-description">
          Our mission is simple: make food discovery and ordering seamless, enjoyable, and fast.
          With a wide range of options and easy-to-use features, <span className="brand-name">Foodwagon</span> ensures every meal is a treat.
        </p>
      </div>
      <div className="about-image">
        <img
          src={FoodTruckPic}
          alt="Foodwagon meals"
          className="responsive-image"
        />
      </div>

      <div className="founder-section">
        <h2 className="founder-title">Meet Our Founder</h2>
        <div className="founder-card">
          <img src={FounderPic} alt="Founder" className="founder-image" />
          <div className="founder-details">
            <h3 className="founder-name">Junaid Sarwar</h3>
            <p className="founder-description">
              Junaid Sarwar, the visionary behind <span className="brand-name">Foodwagon</span>, 
              started with a simple mission: to make quality food accessible to everyone. 
              With years of experience in the food industry, he has built a platform that brings joy to your table.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};



export default About;
