import { useState } from "react";
import Hero from "../components/home/Hero";
import InputBox from "../components/home/InputBox";

function Home() {
  const [studyData, setStudyData] = useState({
    summary: "",
    flashcards: [],
    quiz: [],
    checklist: [],
  });

  return (
    <>
      <Hero />

      <InputBox setStudyData={setStudyData} />

      {studyData.summary && (
        <section
          style={{
            maxWidth: "900px",
            margin: "40px auto",
            padding: "20px",
          }}
        >
          {/* Summary */}
          <h2 style={{ textAlign: "center" }}>Summary</h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            {studyData.summary}
          </p>

          <hr />

          {/* Flashcards */}
          <h2 style={{ textAlign: "center" }}>Flashcards</h2>

          {studyData.flashcards?.map((card, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "15px",
                background: "#fafafa",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>
                Q: {card.question}
              </h3>

              <p>
                <strong>A:</strong> {card.answer}
              </p>
            </div>
          ))}

          <hr />

          {/* Quiz */}
          <h2 style={{ textAlign: "center", marginTop: "30px" }}>Quiz</h2>

          {studyData.quiz?.map((question, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                background: "#fafafa",
              }}
            >
              <h4>
                {index + 1}. {question.question}
              </h4>

              {question.options?.map((option, i) => (
                <div key={i} style={{ margin: "8px 0" }}>
                  <input type="radio" disabled />
                  <label style={{ marginLeft: "8px" }}>{option}</label>
                </div>
              ))}

              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Correct Answer: {question.correctAnswer}
              </p>
            </div>
          ))}

          <hr />

          {/* Revision Checklist */}
          <h2 style={{ textAlign: "center" }}>Revision Checklist</h2>

          <ul
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              listStyle: "none",
              padding: 0,
            }}
          >
            {studyData.checklist?.map((item, index) => (
              <li
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "12px",
                  marginBottom: "10px",
                  background: "#f8f8f8",
                }}
              >
                ✅ {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default Home;