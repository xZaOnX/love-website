import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoveMeter.css';

const LoveMeter = ({ onBack }) => {
    const [percentage, setPercentage] = useState(0);
    const [message, setMessage] = useState('');
    const [isCalculating, setIsCalculating] = useState(false);

    // Generate random percentage between 85 and 100
    const calculateLove = () => {
        setIsCalculating(true);
        setPercentage(0);
        setMessage('');

        // Animation simulation
        setTimeout(() => {
            const result = Math.floor(Math.random() * (100 - 85 + 1)) + 85;
            setPercentage(result);
            setIsCalculating(false);

            // Set message based on range
            if (result >= 85 && result <= 89) {
                setMessage("Tehlikeli derecede aşığım! 🔥");
            } else if (result >= 90 && result <= 94) {
                setMessage("Aşk seviyeleri kontrolden çıktı! 💘");
            } else if (result >= 95 && result <= 99) {
                setMessage("Bu kadar aşk yasak olmalı! ❤️");
            } else {
                setMessage("Evrenin en büyük aşkı! 🌟💕");
            }
        }, 1500);
    };

    useEffect(() => {
        calculateLove();
    }, []);

    return (
        <div className="love-meter-container">
            <motion.button
                className="back-button"
                onClick={onBack}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                ← Menü
            </motion.button>

            <div className="meter-card">
                <h2 className="meter-title">Aşk Ölçer</h2>

                <div className="meter-display">
                    <svg className="circular-chart" viewBox="0 0 36 36">
                        <path
                            className="circle-bg"
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <motion.path
                            className="circle"
                            strokeDasharray={`${percentage}, 100`}
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                            initial={{ strokeDasharray: "0, 100" }}
                            animate={{ strokeDasharray: `${percentage}, 100` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <text x="18" y="20.35" className="percentage">
                            {isCalculating ? "..." : `%${percentage}`}
                        </text>
                    </svg>

                    {/* Pulsing heart in center if not calculating */}
                    {!isCalculating && (
                        <motion.div
                            className="center-heart"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        >
                            ♥
                        </motion.div>
                    )}
                </div>

                <div className="message-container">
                    <AnimatePresence mode="wait">
                        {!isCalculating && (
                            <motion.p
                                key="message"
                                className="love-message"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                {message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                <motion.button
                    className="measure-button"
                    onClick={calculateLove}
                    disabled={isCalculating}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isCalculating ? 'Ölçülüyor...' : 'Tekrar Ölç'}
                </motion.button>
            </div>

            {/* Floating particles background is handled by main app's FloatingHearts or we add some specific ones here if needed, but App.jsx has global hearts. */}
        </div>
    );
};

export default LoveMeter;
