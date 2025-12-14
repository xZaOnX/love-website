import { motion } from 'framer-motion';
import './WelcomePage.css';

const WelcomePage = ({ onNavigate }) => {
    return (
        <div className="welcome-page">
            <motion.div
                className="welcome-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="welcome-card"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <motion.div
                        className="decoration-top"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        ✻
                    </motion.div>

                    <motion.h1
                        className="welcome-title"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        Damla
                    </motion.h1>

                    <motion.p
                        className="welcome-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Senin için özel, sevgi dolu bir dünya...
                    </motion.p>

                    <div className="divider">
                        <span>♥</span>
                    </div>

                    <motion.p
                        className="welcome-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        Bu site senin için tasarlandı.
                        Aşağıdaki seçeneklerden birini seçerek keşfetmeye başla.
                    </motion.p>

                    <div className="menu-container">
                        <motion.button
                            className="menu-button"
                            onClick={() => onNavigate('landing')}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2 }}
                        >
                            <span className="menu-icon">💌</span>
                            Seni Sevmemin 100 Nedeni
                            <span className="arrow">→</span>
                        </motion.button>

                        <motion.button
                            className="menu-button"
                            onClick={() => onNavigate('loveMeter')}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.2 }}
                        >
                            <span className="menu-icon">🌡️</span>
                            Aşk Ölçer
                            <span className="arrow">→</span>
                        </motion.button>

                        <motion.button
                            className="menu-button"
                            onClick={() => onNavigate('quiz')}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.4 }}
                        >
                            <span className="menu-icon">❓</span>
                            Beni Ne Kadar Tanıyorsun?
                            <span className="arrow">→</span>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WelcomePage;
