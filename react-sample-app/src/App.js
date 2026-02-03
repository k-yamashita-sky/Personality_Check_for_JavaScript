import React, { useState } from 'react';
import './App.css'; // ここでCSSファイルを読み込む
import questions from './questions.json';
import resultsData from './results.json';

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleChoice = (point) => {
    const nextScore = score + point;
    setScore(nextScore);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    return resultsData.find(res => score >= res.threshold) || resultsData[resultsData.length - 1];
  };

  return (
    <div className="container">
      <div className="card">
        {!showResult ? (
          <div>
            <div className="status-label">QUESTION {currentQ + 1} / {questions.length}</div>
            <h2 className="question-text">{questions[currentQ].text}</h2>
            <div className="button-group">
              {questions[currentQ].choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice.point)}
                  className="choice-button"
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="result-container">
            <div style={{ fontSize: '60px' }}>✨</div>
            <h3 className="result-title">{getResult().title}</h3>
            <p className="result-description">{getResult().description}</p>
            <button className="choice-button" style={{backgroundColor: '#1f2937', color: '#fff', marginTop: '20px'}} onClick={() => window.location.reload()}>
              もう一度診断する
            </button>
          </div>
        )}
      </div>
    </div>
  );
}