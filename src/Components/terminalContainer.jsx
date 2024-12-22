import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Terminal from './terminal';
import { motion } from 'framer-motion';

const TerminalContainer = ({handleClick}) => {

  return (
    <motion.div
      className="Terminal"
      style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '-3rem',
        marginBottom: '5rem',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.div
        className=""
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <p
          style={{
            margin: '0',
            fontSize: '1.5rem',
            fontWeight: 'lighter',
            position: 'relative',
            zIndex: '1',
          }}
        >
          A tech geek?
        </p>
        <h2
          style={{
            margin: '0 auto',
            fontWeight: 'lighter',
            color: 'rgb(181, 190, 203)',
            position: 'relative',
          }}
        >
          Use the Terminal to navigate around enter
          <span
            style={{
              color: 'white',
              fontSize: '1.3rem',
              fontStyle: 'italic',
            }}
          >
            'web --help'
          </span>{' '}
          to get started
        </h2>
      </motion.div>
      <Terminal handleOpenGui={handleClick} />
    </motion.div>
  );
};

export default TerminalContainer;
