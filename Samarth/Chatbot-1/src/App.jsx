import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState();

  async function generateAnswer() {
    setAnswer("Loading ...");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDplmHAXBzIp6txPJAybdUUrPOQ-iLioFs",
        method: "post",
        data: { contents: [{ parts: [{ text: question }] }] },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("An error occurred. Please try again.");
    }
  }

  return (
    <>
      <div className="container">
        <h1>Chat-AI</h1>
        <div className="textarea-container">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div className="button-container">
          <button onClick={generateAnswer}>Generate Answer</button>
        </div>
        <pre className="answer">{answer}</pre>
      </div>
    </>
  );
}

export default App;
