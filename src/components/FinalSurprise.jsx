import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './FinalSurprise.css';
import photo from '../photo.JPG';

const FinalSurprise = ({ isOpen, onClose, onReset }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const heartArray = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2
      }));
      setHearts(heartArray);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="final-surprise-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Heart Rain */}
          <div className="heart-rain">
            {hearts.map((heart) => (
              <motion.div
                key={heart.id}
                className="falling-heart"
                style={{ left: `${heart.left}%` }}
                initial={{ y: -100, opacity: 0 }}
                animate={{
                  y: '100vh',
                  opacity: [0, 1, 1, 0],
                  rotate: 360
                }}
                transition={{
                  duration: heart.duration,
                  delay: heart.delay,
                  ease: 'linear'
                }}
              >
                ♥
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            className="final-surprise-content"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="final-heart"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              ♥
            </motion.div>

            <motion.h2
              className="final-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Ve en önemli sebep...
            </motion.h2>

            <motion.p
              className="final-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Sen, sen olduğun için.
              <br />
              <span className="highlight">Seni sonsuza kadar seveceğim.</span>
            </motion.p>

            {/* Photo Placeholder */}
            <motion.div
              className="photo-frame"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 }}
            >
              <img src={photo} alt="Love" className="photo-image" />

            </motion.div>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <motion.button
                className="close-button"
                onClick={onReset}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Sıfırla"
                style={{ background: 'linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%)' }}
              >
                ↻
              </motion.button>

              <motion.button
                className="close-button"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Kapat"
              >
                ♥
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FinalSurprise;
