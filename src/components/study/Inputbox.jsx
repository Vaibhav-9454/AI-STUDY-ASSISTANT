import { useState } from "react";
import { generateStudyKit } from "../../services/api";

function InputBox({ setStudyData }) {
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!notes.trim()) {
      setError("Please enter some notes.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await generateStudyKit(notes);

      setStudyData(data);
    } catch (err) {
      console.error(err);
      setError("Failed to generate study kit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <textarea
        rows="12"
        placeholder="Paste your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        style={{
          width: "90%",
          maxWidth: "900px",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "16px",
          resize: "vertical",
        }}
      />

      {error && (
        <p
          style={{
            color: "red",
            marginTop: "15px",
          }}
        >
          {error}
        </p>
      )}

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          border: "none",
          borderRadius: "10px",
          background: "#2563eb",
          color: "white",
          fontSize: "16px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Study Kit"}
      </button>
    </section>
  );
}

export default InputBox;