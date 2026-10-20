import React from "react";
import "./ContactPage.css";
import Footer from "./Footer";

const owner = {
  name: "Atul Nagendra",
  role: "Owner",
  description:
    "Atul Nagendra is the visionary founder of Shri Shiv Auvtar Chemical and Fertilizer Shop, with over 25 years of experience in the agricultural sector. He has been honored with multiple awards for his contribution to farmer empowerment and sustainable farming.",
  image: "https://via.placeholder.com/200",
  achievements: [
    "Best Agro Entrepreneur Award 2020",
    "Sustainable Farming Excellence 2018",
    "Farmer's Friend Recognition 2015",
  ],
};

const teamMembers = [
  {
    name: "Sanjeev Sharma",
    role: "Sales Manager",
    image: "https://via.placeholder.com/150",
    achievements: [
      "Top Sales Performer 2022",
      "Customer Satisfaction Excellence 2021",
    ],
  },
  {
    name: "Anshal Bhardwaj",
    role: "Accountant",
    image: "https://via.placeholder.com/150",
    achievements: [
      "Best Financial Planner 2020",
      "Accuracy Award 2019",
    ],
  },
  {
    name: "Suryansh Nagendra",
    role: "Delivery Head",
    image: "https://via.placeholder.com/150",
    achievements: [
      "Logistics Excellence Award 2021",
      "On-Time Delivery Recognition 2022",
    ],
  },
];

const awardsGallery = [
  { img: "https://via.placeholder.com/300x200?text=Award+1", title: "Best Agro Entrepreneur 2020" },
  { img: "https://via.placeholder.com/300x200?text=Award+2", title: "Sustainable Farming Excellence 2018" },
  { img: "https://via.placeholder.com/300x200?text=Award+3", title: "Customer Satisfaction 2021" },
];

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Owner Section */}
      <section className="owner-section">
        <h1>Meet Our Owner</h1>
        <div className="owner-content">
          <img src={owner.image} alt={owner.name} />
          <div className="owner-details">
            <h2>{owner.name}</h2>
            <h4>{owner.role}</h4>
            <p>{owner.description}</p>
            <h5>Achievements:</h5>
            <ul>
              {owner.achievements.map((ach, idx) => (
                <li key={idx}>✔️ {ach}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h1>Our Dedicated Team</h1>
        <div className="team-container">
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={idx}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <h5>{member.role}</h5>
              <p><strong>Achievements:</strong></p>
              <ul>
                {member.achievements.map((ach, i) => (
                  <li key={i}>⭐ {ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Gallery Section */}
      <section className="awards-section">
        <h1>Our Awards & Recognitions</h1>
        <div className="awards-gallery">
          {awardsGallery.map((award, idx) => (
            <div className="award-card" key={idx}>
              <img src={award.img} alt={award.title} />
              <p>{award.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      {/* <Footer className="footer">
        <p>© 2025 Shri Shiv Auvtar Chemical and Fertilizer Shop. All rights reserved.</p>
        <p>Contact: +91-99999-88888 | Email: info@shivauvtar.com</p>
      </Footer> */}
    </div>
  );
};

export default ContactPage;
