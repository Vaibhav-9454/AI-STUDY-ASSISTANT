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
          <h2>Summary</h2>
          <p>{studyData.summary}</p>

          <hr />

          <h2>Flashcards</h2>

          {studyData.flashcards?.map((card, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "12px",
              }}
            >
              <strong>Q:</strong> {card.question}
              <br />
              <strong>A:</strong> {card.answer}
            </div>
          ))}

          <hr />

          <h2>Quiz</h2>

          {studyData.quiz?.map((question, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "12px",
              }}
            >
              <h4>{question.question}</h4>

              <ul>
                {question.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>

              <strong>Answer:</strong> {question.correctAnswer}
            </div>
          ))}

          <hr />

          <h2>Revision Checklist</h2>

          <ul>
            {studyData.checklist?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default Home;