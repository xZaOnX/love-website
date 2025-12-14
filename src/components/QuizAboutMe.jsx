import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';
import { quizQuestions } from '../data/quizQuestions';
import './QuizAboutMe.css';

const QuizAboutMe = ({ onBack }) => {
  const [gameState, setGameState] = useState('intro'); // intro, playing, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', message: string }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleStart = () => {
    setGameState('playing');
  };

  const handleOptionClick = (optionIndex) => {
    if (isAnswered) return;

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setShowConfetti(true);
      setFeedback({ type: 'success', message: 'Doğru! 🎉' });
    } else {
      setFeedback({ type: 'error', message: 'Ah be aşkım! 🥺' });
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsAnswered(false);
        setShowConfetti(false);
        setFeedback(null);
      } else {
        setGameState('result');
      }
    }, 1500);
  };

  const getResultContent = () => {
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage === 100) {
      return {
        message: "Helal olsun, ruh ikizimsin! 💖",
        emoji: "🏆"
      };
    } else if (percentage >= 80) {
      return {
        message: "Beni çok iyi tanıyorsun! 🥰",
        emoji: "🌟"
      };
    } else if (percentage >= 60) {
      return {
        message: "Fena değil, ama daha çok vakit geçirmeliyiz 😉",
        emoji: "🤔"
      };
    } else {
      return {
        message: "Biraz daha çalışman lazım :)",
        emoji: "📚"
      };
    }
  };

  const handleRetry = () => {
    setGameState('intro');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowConfetti(false);
    setFeedback(null);
  };

  return (
    <div className="quiz-container">
      <motion.button
        className="back-button-quiz"
        onClick={onBack}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ← Menü
      </motion.button>

      <AnimatePresence mode="wait">
        {gameState === 'intro' && (
          <motion.div
            key="intro"
            className="quiz-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h2 className="quiz-title">Bakalım beni ne kadar iyi tanıyorsun?</h2>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🕵️‍♀️</div>
            <p style={{ marginBottom: '30px', color: '#666' }}>
              Toplam {quizQuestions.length} soru var. Hazır mısın?
            </p>
            <motion.button
              className="start-btn"
              onClick={handleStart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Teste Başla
            </motion.button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div
            key="question"
            className="quiz-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="progress-dots">
              {quizQuestions.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`dot ${idx === currentQuestionIndex ? 'active' : ''} ${idx < currentQuestionIndex ? 'completed' : ''}`}
                />
              ))}
            </div>

            <h3 className="question-text">{currentQuestion.question}</h3>

            <div className="options-grid">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  className={`option-btn ${
                    isAnswered && idx === currentQuestion.correctAnswer ? 'correct' : ''
                  } ${
                    isAnswered && idx === selectedOption && idx !== currentQuestion.correctAnswer ? 'incorrect' : ''
                  }`}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className={`feedback-msg ${feedback?.type === 'error' ? 'error' : ''}`}>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {feedback.message}
                </motion.div>
              )}
            </div>

            {showConfetti && (
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <ConfettiExplosion force={0.8} duration={2200} particleCount={60} width={800} />
              </div>
            )}
          </motion.div>
        )}

        {gameState === 'result' && (
          <motion.div
            key="result"
            className="quiz-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {score === quizQuestions.length && <ConfettiExplosion particleCount={200} duration={5000} />}
            
            <div className="result-score">
              {score} / {quizQuestions.length}
            </div>
            
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
              {getResultContent().emoji}
            </div>

            <p className="result-message">
              {getResultContent().message}
            </p>

            <motion.button
              className="start-btn"
              onClick={handleRetry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tekrar Dene
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizAboutMe;
