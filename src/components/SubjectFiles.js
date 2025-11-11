// src/components/SubjectFiles.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const SubjectFiles = ({ subject }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/upload/${subject}`)
      .then((res) => setFiles(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [subject]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px" }}>{subject} PDFs</h2>

      {files.length === 0 ? (
        <p>No files uploaded yet for {subject}.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {files.map((file, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                background: "#fafafa",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{file.name}</p>
              <a
                href={`http://localhost:8080${file.path}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#007BFF",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  display: "inline-block",
                  marginTop: "8px",
                }}
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectFiles;
