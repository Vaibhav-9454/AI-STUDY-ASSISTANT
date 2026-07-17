function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>AI Study Assistant</h2>

      <span>Powered by Gemini AI</span>
    </nav>
  );
}

export default Navbar;