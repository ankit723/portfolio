import TextScramble from '@twistezo/react-text-scramble';
import { motion } from 'framer-motion';

const TypingText = ({ showPage }) => {
  const textsToType = ['Web Developer', 'android Developer', 'ML Engineer', 'Game Developer'];

  return (
    <motion.div 
      className={`typing-text`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className={`typing-text ${showPage ? 'topTheText' : ''} homeTypingText`}
        id="hello"
        style={{
          display: 'flex',
          width: '100vw',
          margin: '1.5rem 0',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2.5rem',
          color: 'rgb(112, 112, 112)',
          fontWeight: '350',
          fontFamily: 'monospace',
          paddingTop: '1rem',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <TextScramble texts={textsToType} letterSpeed={10} nextLetterSpeed={200} />
      </div>
    </motion.div>
  );
};

export default TypingText;
