

import { useState } from "react";
import Data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Test.css"; // Import the CSS file

function TestPage() {
  console.log(Data.results);
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = Data.results[questionIndex];

  const handleSelect = (index) => {
    setQuestionIndex(index);
  };
  const handleNext = () => {
    if (questionIndex < Data.results.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <div className="test-container">
      <div className="row">
        {/* Left Section - Question & Answers */}
        <div className="col-md-9">
          {/* Header Section */}
          <div className="header">
            <h4>Question No. {questionIndex + 1}</h4>
            <div className="status">
              <span className="marks correct">+1</span>
              <span className="marks incorrect">-0</span>
              <span className="timer">⏳ 19:05</span>
              <select className="language-select">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>

          {/* Question Section */}
          <div className="question-box">
            <p className="question">{question?.question}</p>

            {/* Answer Options */}
            <div className="options">
              <label className="option">
                <input type="radio" name="answer" /> {question?.correct_answer}
              </label>
              {question?.incorrect_answers?.map((data, index) => (
                <label key={index} className="option">
                  <input type="radio" name="answer" /> {data}
                </label>
              ))}
            </div>
            <button type="button" className="pre-btn">Preious Question</button>
            <button type="button" className="next-btn" onClick={handleNext} disabled={questionIndex === Data.results.length - 1}>
              Save & Next
            </button>
          </div>
        </div>

        {/* Right Section - Question Navigation */}
        <div className="col-md-3 navigation-panel">
          <h6 className="section-title">SECTION: General Intelligence and Reasoning</h6>
          <div className="question-buttons">
            {Data.results.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`nav-button ${index === questionIndex ? "active" : ""}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button type="submit" className="instruction-btn">Instruction</button>
          <button type="submit" className="submit-btn">Submit Test </button>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
