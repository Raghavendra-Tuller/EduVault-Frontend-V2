import React from "react";
import "./About.css";

const profilePic = "https://filecoin.io/vintage/images/blog/hfs-eduvault.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <img src={profilePic} alt="Profile" className="about-img" />
        <h2 className="about-title">EduVault</h2>

        <p className="about-description">
          EduVault is a notes-sharing platform built to help students collaborate,
          learn, and grow together. It’s a simple space where knowledge becomes 
          accessible to everyone, making studying easier and more effective.
        </p>

        <h3 className="about-subtitle">About the Creator</h3>
        <p className="about-description">
          Hey, I’m Raghavendra Tuller! 👋 I’m a fresher and tech enthusiast who loves exploring
          programming and real-world projects. I enjoy experimenting with new ideas,
          learning by building, and contributing to solutions that can actually help people.  
          As a college student, I’m still growing my skills — but I’m excited to keep 
          learning, building, and exploring the world of technology 
        </p>

        <div className="about-links">
          
          <a href="https://www.linkedin.com/in/raghavendra-tuller" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;