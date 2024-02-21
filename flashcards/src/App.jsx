import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const questions = [
    "What is the capital of China?",
    "Who is Perry the Platypus's owner?",
    "How many sides does a triangle have?",
    "Who painted the Mona Lisa?",
    "What is the capital of France?",
    "What is a supernova?",
    "What is the world's highest mountain peak?",
    "What is the world's largest ocean?",
    "In what year did World War II end?",
    "What is the capital of Japan?",
  ];

  const answers = [
    "Beijing",
    "Phineas and Ferb",
    "3",
    "Leonardo da Vinci",
    "Paris",
    "the explosion of a star",
    "Mount Everest",
    "The Pacific Ocean",
    "1945",
    "Tokyo",
  ];

  const nextCard = () => {
    setGuess('');
    setShowResult(false);
    setIsFlipped(false);
    setCardIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  const checkAnswer = () => {
    return guess.toLowerCase() === answers[cardIndex].toLowerCase();
  };

  const handleSubmit = () => {
    flipCard();
    setShowResult(true);
  };

  return (
    <div className="App">
      <div className="content-header">
        <h1>Trivia Website</h1>
        <p>Enter your guess below and click the card to see the answer</p>
        <p>There is a total of {questions.length} cards</p>
      </div>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>{questions[cardIndex]}</h1>
          </div>
          <div className="flip-card-back">
            {showResult ? (
              <h1>{checkAnswer() ? "Correct!" : "Incorrect"}</h1>
            ) : null}
          </div>
        </div>
      </div>
      <div className="guess-box">
        <input type="text" value={guess} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <button onClick={nextCard}>Next Card</button>
    </div>
  );
};

export default App;
