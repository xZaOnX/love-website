import { motion, AnimatePresence } from 'framer-motion';
import './SecretLetter.css';

const SecretLetter = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="secret-letter-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="secret-letter-content"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: 'spring', duration: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="letter-paper">
              <div className="letter-header">
                <motion.div
                  className="letter-heart"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  💌
                </motion.div>
                <h3 className="letter-title">Gizli Aşk Mektubu</h3>
                <div className="letter-date">Özel tarihimiz için ♥</div>
              </div>

              <div className="letter-body">
                <p className="letter-text">
                  Canım,
                </p>
                <p className="letter-text">
                  Bu gizli mesajı bulduysan, demek ki tarihimizi hatırlıyorsun.
                  Bu benim için çok özel çünkü o gün hayatımdaki en güzel yolculuk başladı.
                </p>
                <p className="letter-text">
                  Seninle geçirdiğim her an bir armağan. Her gün seni daha çok
                  seviyorum ve seninle her anı paylaşmaktan mutluluk duyuyorum.
                </p>
                <p className="letter-text">
                  100 nedenim var seni sevmek için, ama asıl sebep çok basit:
                  Sen varsın. Sen benim yanımdasın. Ve bu, bana dünyayı kazandırıyor.
                </p>
                <p className="letter-text signature">
                  Sonsuz sevgiyle,
                  <br />
                  <span className="signature-name">Senin için her şey ♥</span>
                </p>
              </div>

              <div className="letter-footer">
                <div className="decorative-line"></div>
                <p className="letter-ps">
                  Not: Buraya kendi özel mesajını yazabilirsin!
                  <br />
                  <small>(src/components/SecretLetter.jsx dosyasında)</small>
                </p>
              </div>
            </div>

            <button className="letter-close-btn" onClick={onClose}>
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecretLetter;
