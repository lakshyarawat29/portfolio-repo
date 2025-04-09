import React from 'react';
import './Techstack.css';
import { motion } from 'framer-motion';
import techLogos from '../assets/techIcons/techicons';

const Techstack = () => {
  return (
    <div className="techstack-main-div">
      <div className="techstack-up">
        <h1>Technologies Grinded Upon</h1>
      </div>
      <div className="techstack-slide-show">
        <motion.div
          className="slider-track"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {[...techLogos].map((logo, index) => (
            <img key={index} src={logo} alt="tech-logo" className="tech-logo" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Techstack;
