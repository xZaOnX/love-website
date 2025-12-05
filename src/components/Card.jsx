import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import './Card.css';

const Card = ({ number, reason, isRevealed, onReveal }) => {
  const [isFlipped, setIsFlipped] = useState(isRevealed);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isRevealed) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  }, [isRevealed]);

  const handleClick = () => {
    if (!isRevealed) {
      setIsFlipped(true);
      setShowConfetti(true);
      onReveal(number);
      setTimeout(() => setShowConfetti(false), 2000);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  return (
    <>
      <div className="card-wrapper">
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
          <div className="card-front">
            <div className="card-number">{number}</div>
            <div className="card-envelope">✉</div>
            <div className="shimmer"></div>
          </div>
          <div className="card-back">
            <div className="card-reason">{reason}</div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="card-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            {showConfetti && (
              <div className="confetti-container-center">
                <ConfettiExplosion
                  force={0.6}
                  duration={2500}
                  particleCount={50}
                  width={600}
                  colors={['#b76e79', '#ffc0cb', '#d4af37', '#ffb3c1']}
                />
              </div>
            )}
            <motion.div
              className="card-modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-card">
                <div className="modal-card-inner">
                  <div className="modal-heart-icon">♥</div>
                  <div className="modal-reason">{reason}</div>
                  <div className="modal-number">#{number}</div>
                  <button className="modal-close-btn" onClick={handleCloseModal}>
                    Kapat
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
