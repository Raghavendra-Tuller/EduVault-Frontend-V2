// src/api.js
import API_BASE_URL from "./config";

export async function getNotes() {
  const response = await fetch(`${API_BASE_URL}/notes`);
  return response.json();
}

export async function createNote(note) {
  const response = await fetch(`${API_BASE_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return response.json();
}
