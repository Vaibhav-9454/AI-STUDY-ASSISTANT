function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "60px 20px",
        background: "#f5f7ff",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#2563eb",
          marginBottom: "15px",
        }}
      >
        AI Study Assistant
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#555",
          maxWidth: "700px",
          margin: "auto",
          lineHeight: "1.7",
        }}
      >
        Paste your notes and instantly generate an AI-powered summary,
        flashcards, quiz questions, and a revision checklist using Gemini AI.
      </p>
    </section>
  );
}

export default Hero;