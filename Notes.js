import React, { useEffect, useState } from "react";
import axios from "axios";

const OS = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/upload/OS")
      .then((res) => setFiles(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Operating Systems PDFs</h2>
      {files.length === 0 ? (
        <p>No files uploaded yet.</p>
      ) : (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              <a
                href={`http://localhost:8080${file.path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OS;
