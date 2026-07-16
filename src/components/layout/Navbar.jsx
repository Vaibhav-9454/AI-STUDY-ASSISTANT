function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>📚 StudyAI</h2>

      <button>GitHub</button>
    </nav>
  );
}

export default Navbar;