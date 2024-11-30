import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us a Message <img src="./images/msg-icon.png" alt="" /></h3>
        <p>
          Have a question? Need help using the tool? Feel free to reach out to
          us. Simply fill out our contact form below, and we'll get back to you
          as soon as possible. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          community.
        </p>
        <ul>
          <li>rashaa.3112@gmail.com</li>
          <li>+91 7378240240</li>
        </ul>
      </div>
      <div className="contact-col">
      <form action="">
  <label htmlFor="name">Your Name</label>
  <input type="text" id="name" name="name" placeholder="Enter Your Name" required pattern="[a-zA-Z]{3,}" title="Name must be at least 3 letters and contain only letters"/>

  <label htmlFor="phone">Phone Number</label>
  <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" required pattern="[0-9]{10}" title="Phone number must be 10 digits"/>

  <label htmlFor="message">Write Your Message Here</label>
  <textarea name="message" id="message" rows="6" placeholder="Enter Your Message" required></textarea>

  <button type="submit" className="btn dark-btn">Submit Now</button>
</form>

      </div>
    </div>
  );
};

export default Contact;
