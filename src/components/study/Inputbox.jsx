import { useState } from "react";

function InputBox() {
  const [notes, setNotes] = useState("");

  return (
    <section
      style={{
        width: "80%",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <textarea
        rows={12}
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "10px",
        }}
        placeholder="Paste your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <p>{notes.length} Characters</p>

      <button
        disabled={!notes.trim()}
        style={{
          padding: "15px 30px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Generate Study Kit
      </button>
    </section>
  );
}

export default InputBox;