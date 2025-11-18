import React, { useState } from "react";
import axios from "axios";
import "./Upload.css";

function Upload() {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleSubjectChange = (e) => setSubject(e.target.value);

  const handleUpload = async () => {
    if (!file || !subject) {
      setMessage("Please select a subject and choose a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("subject", subject);

    try {
      const res = await axios.post("http://localhost:8080/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(` File uploaded successfully: ${res.data.filePath}`);
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed. Please try again.");
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2 className="upload-title">📘 Upload Notes</h2>

        <label className="upload-label">Select Subject:</label>
        <select className="upload-select" value={subject} onChange={handleSubjectChange}>
          <option value="">-- Choose a Subject --</option>
          <option value="DSA">DSA</option>
          <option value="DBMS">DBMS</option>
          <option value="OS">OS</option>
          <option value="VLSI">VLSI</option>
          <option value="DSP">DSP</option>
          <option value="Networks">Networks</option>
          <option value="DSDV">DSDV</option>
          <option value="ML">ML</option>
          <option value="AI">AI</option>
          <option value="WebDev">WebDev</option>
          <option value="IOT">IOT</option>
        </select>

        <label className="upload-label">Choose File:</label>
        <input type="file" className="upload-input" onChange={handleFileChange} />

        <button className="upload-btn" onClick={handleUpload}>
          Upload
        </button>

        {message && <p className="upload-message">{message}</p>}
      </div>
    </div>
  );
}

export default Upload;

