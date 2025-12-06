import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import Card from './components/Card';
import ProgressTracker from './components/ProgressTracker';
import FloatingHearts from './components/FloatingHearts';
import FinalSurprise from './components/FinalSurprise';
import SecretLetter from './components/SecretLetter';
import { reasons } from './data/reasons';
import './App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [revealedCards, setRevealedCards] = useState([]);
  const [showFinalSurprise, setShowFinalSurprise] = useState(false);
  const [showSecretLetter, setShowSecretLetter] = useState(false);
  const [clickSequence, setClickSequence] = useState([]);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('loveCardsProgress');
    if (saved) {
      setRevealedCards(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (revealedCards.length > 0) {
      localStorage.setItem('loveCardsProgress', JSON.stringify(revealedCards));
    }
  }, [revealedCards]);

  // Check if all cards are revealed
  useEffect(() => {
    if (revealedCards.length === 100 && !showFinalSurprise) {
      setTimeout(() => {
        setShowFinalSurprise(true);
      }, 1000);
    }
  }, [revealedCards, showFinalSurprise]);

  // Check for secret sequence (1, 4, 3)
  useEffect(() => {
    if (clickSequence.length >= 3) {
      const lastThree = clickSequence.slice(-3);
      if (lastThree[0] === 1 && lastThree[1] === 4 && lastThree[2] === 3) {
        setShowSecretLetter(true);
        setClickSequence([]); // Reset sequence
      }
    }
  }, [clickSequence]);

  const handleStart = () => {
    setShowLanding(false);
  };

  const handleCardReveal = (cardNumber) => {
    if (!revealedCards.includes(cardNumber)) {
      setRevealedCards([...revealedCards, cardNumber]);
    }
    setClickSequence([...clickSequence, cardNumber]);
  };

  const handleCloseFinalSurprise = () => {
    setShowFinalSurprise(false);
  };

  const handleCloseSecretLetter = () => {
    setShowSecretLetter(false);
  };

  const handleReset = () => {
    localStorage.removeItem('loveCardsProgress');
    setRevealedCards([]);
    setShowFinalSurprise(false);
    setClickSequence([]);
    setShowSecretLetter(false);
    setShowLanding(true);
  };

  // CUSTOMIZE THESE VALUES:
  const herName = "Aşkım"; // Her name here
  const yourName = "Senin Adın"; // Your name here

  return (
    <div className="app">
      <FloatingHearts />

      {showLanding ? (
        <LandingPage
          onStart={handleStart}
          herName={herName}
          yourName={yourName}
        />
      ) : (
        <>
          <ProgressTracker revealed={revealedCards.length} total={100} />

          <motion.button
            key="reset-button"
            className="reset-button"
            onClick={handleReset}
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ↻ Sıfırla
          </motion.button>

          <motion.button
            key="test-surprise-button"
            className="test-surprise-button"
            onClick={() => setShowFinalSurprise(true)}
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 9999,
              padding: '10px 20px',
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            🧪 Test Sürpriz
          </motion.button>

          <motion.div
            className="cards-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="page-title"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Seni Sevmemin 100 Nedeni
            </motion.h2>

            <div className="cards-grid">
              {reasons.map((reason, index) => (
                <Card
                  key={index + 1}
                  number={index + 1}
                  reason={reason}
                  isRevealed={revealedCards.includes(index + 1)}
                  onReveal={handleCardReveal}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}

      <FinalSurprise
        isOpen={showFinalSurprise}
        onClose={handleCloseFinalSurprise}
        onReset={handleReset}
      />

      <SecretLetter
        isOpen={showSecretLetter}
        onClose={handleCloseSecretLetter}
      />
    </div>
  );
}

export default App;
