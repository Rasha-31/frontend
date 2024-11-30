import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src="./images/about.jpg" alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h2>Introduction</h2>
        <p>
          "Our AI-powered book summarizer is designed to help you quickly grasp
          the key ideas from any book. By using advanced natural language
          processing techniques, we can extract the most important information
          and present it in a concise and informative format."
        </p>
        <h2>Benefits</h2>
        <p>
          {" "}
          "Save time and effort by reading only the essential parts of a book.
          Improve your understanding of complex topics. Access knowledge from a
          wide range of books more efficiently."
        </p>
        <h2>Customization Options</h2>
        <p>
          "Tailor the summaries to your specific needs with customizable
          settings, such as length, style, and focus areas. Our tool allows you
          to choose how you want the information presented."
        </p>
      </div>
    </div>
  );
};

export default About;
