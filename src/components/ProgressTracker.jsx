import { motion } from 'framer-motion';
import './ProgressTracker.css';

const ProgressTracker = ({ revealed, total }) => {
  const percentage = (revealed / total) * 100;

  return (
    <motion.div
      className="progress-tracker"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="progress-content">
        <div className="progress-text">
          Açılan: <span className="progress-number">{revealed}/{total}</span>
        </div>

        <div className="progress-bar-container">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>

        <div className="progress-heart-container">
          <motion.div
            className="progress-heart"
            animate={{
              scale: percentage > 0 ? [1, 1.2, 1] : 1
            }}
            transition={{
              duration: 0.5,
              repeat: percentage === 100 ? Infinity : 0
            }}
          >
            <svg viewBox="0 0 100 100" className="heart-svg">
              <defs>
                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#b76e79" />
                  <stop offset="100%" stopColor="#d4af37" />
                </linearGradient>
              </defs>
              <path
                d="M50,90 C50,90 10,60 10,35 C10,20 20,10 32,10 C40,10 45,15 50,22 C55,15 60,10 68,10 C80,10 90,20 90,35 C90,60 50,90 50,90 Z"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="2"
              />
              <motion.path
                d="M50,90 C50,90 10,60 10,35 C10,20 20,10 32,10 C40,10 45,15 50,22 C55,15 60,10 68,10 C80,10 90,20 90,35 C90,60 50,90 50,90 Z"
                fill="url(#heartGradient)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: percentage / 100 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressTracker;
