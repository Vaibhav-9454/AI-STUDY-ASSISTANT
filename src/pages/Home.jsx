import { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import InputBox from "../components/home/InputBox";

function Home() {
  const [studyData, setStudyData] = useState(() => {
    const saved = localStorage.getItem("studyKit");

    return saved
      ? JSON.parse(saved)
      : {
          summary: "",
          flashcards: [],
          quiz: [],
          checklist: [],
        };
  });

  useEffect(() => {
    localStorage.setItem("studyKit", JSON.stringify(studyData));
  }, [studyData]);

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
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            📄 Summary
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              background: "#f9f9f9",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            {studyData.summary}
          </p>

          <hr
            style={{
              margin: "35px 0",
            }}
          />

          {/* Flashcards */}
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            🎴 Flashcards
          </h2>

          {studyData.flashcards?.map((card, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "15px",
                background: "#fafafa",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <h3>{card.question}</h3>

              <p>
                <strong>Answer:</strong> {card.answer}
              </p>
            </div>
          ))}

          <hr
            style={{
              margin: "35px 0",
            }}
          />

          {/* Quiz */}
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            ❓ Quiz
          </h2>

          {studyData.quiz?.map((question, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                background: "#fafafa",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <h3>
                {index + 1}. {question.question}
              </h3>

              {question.options?.map((option, i) => (
                <div
                  key={i}
                  style={{
                    margin: "10px 0",
                  }}
                >
                  <input type="radio" disabled />
                  <label style={{ marginLeft: "10px" }}>
                    {option}
                  </label>
                </div>
              ))}

              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                ✅ Correct Answer: {question.correctAnswer}
              </p>
            </div>
          ))}

          <hr
            style={{
              margin: "35px 0",
            }}
          />

          {/* Checklist */}
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            ✅ Revision Checklist
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
            }}
          >
            {studyData.checklist?.map((item, index) => (
              <li
                key={index}
                style={{
                  background: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  marginBottom: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
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