import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Read Less, Know More</h1>
        <p>
          Our AI-powered book summarizer delivers concise, insightful summaries
          of both fiction and non-fiction. Using advanced AI, it quickly
          condenses books into key highlights, helping readers grasp essential
          ideas in less time. Ideal for students, professionals, and book
          lovers, it keeps you informed and engaged with books more efficiently.
        </p>

        <button className="btn">Explore More <img src="./images/dark-arrow.png" alt="" /></button>
      </div>

      

    </div>
  );
};

export default Hero;
