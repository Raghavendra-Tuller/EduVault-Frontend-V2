import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");

  const subjects = [
    { title: "DSA Notes", path: "/dsa", desc: "Basics of arrays, stacks, queues, linked lists." },
    { title: "DBMS Notes", path: "/dbms", desc: "Database design, SQL queries, normalization, ER diagrams." },
    { title: "OS Notes", path: "/os", desc: "Processes, scheduling, memory management, file systems." },
    { title: "Computer Networks Notes", path: "/networks", desc: "OSI model, TCP/IP, routing, switching, protocols." },
    { title: "VLSI Notes", path: "/vlsi", desc: "CMOS logic, fabrication, circuit design, logic styles." },
    { title: "DSP Notes", path: "/dsp", desc: "Fourier transforms, filters, z-transforms, signal processing." },
    { title: "Digital Communication Notes", path: "/dsdv", desc: "Digital System Design & Verification, FSMs, Verilog basics." },
    { title: "AI Notes", path: "/ai", desc: "Artificial Intelligence basics, search algorithms, expert systems." },
    { title: "ML Notes", path: "/ml", desc: "Machine learning models, regression, classification, clustering." },
    { title: "Web Development Notes", path: "/webdev", desc: "HTML, CSS, JavaScript, React basics for frontend development." },
    { title: "IoT Notes", path: "/iot", desc: "IoT architectures, ESP32, sensors, real-time applications." },
    { title: "Data Security Notes", path: "/datasecurity", desc: "Cryptography, authentication, access control, hashing." },
  ];

  // Filtered subjects based on search
  const filteredSubjects = subjects.filter((sub) =>
    sub.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2 className="home-title">Uploaded Notes</h2>

      {/* 🔍 Search Bar */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search subjects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-input"
        />
        <button onClick={() => setSearch("")} className="filter-reset">
          Reset
        </button>
      </div>

      {/* 📘 Subject Cards */}
      <div className="notes-grid">
        {filteredSubjects.map((sub, index) => (
          <Link
            to={sub.path}
            key={index}
            className="note-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3 className="note-title">{sub.title}</h3>
            <p className="note-description">{sub.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
