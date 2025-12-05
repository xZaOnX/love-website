import { motion } from 'framer-motion';
import './LandingPage.css';

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-page">
      <motion.div
        className="landing-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="main-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Seni Sevmemin
          <br />
          <span className="number-100">100</span>
          <br />
          Nedeni
        </motion.h1>



        <motion.div
          className="heart-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
        >
          <motion.div
            className="main-heart"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            ♥
          </motion.div>
        </motion.div>

        <motion.button
          className="start-button"
          onClick={onStart}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 10px 40px rgba(183, 110, 121, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Keşfetmeye Başla
          <span className="button-heart">♥</span>
        </motion.button>

        <motion.div
          className="hint-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Her bir kart, sana olan sevgimin bir parçası...
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
