import TextScramble from '@twistezo/react-text-scramble';
import React from 'react';

const TypingText = ({ showPage }) => {
  const textsToType = ['Web Developer', 'android Developer', 'ML Engineer', 'Game Developer'];

  return (
    <div className={`typing-text`}>
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
    </div>
  );
};

export default TypingText;
