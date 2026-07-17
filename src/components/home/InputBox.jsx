import { useState } from "react";
import { generateStudyKit } from "../../services/api";

function InputBox({ setStudyData }) {
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!notes.trim()) {
      alert("Please enter your notes.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateStudyKit(notes);

      setStudyData(data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate study kit.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>AI Study Assistant</h2>

      <textarea
        rows="10"
        cols="80"
        placeholder="Paste your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Study Kit"}
      </button>
    </section>
  );
}

export default InputBox;