import React from 'react';
import { motion, useScroll, useTransform,useAnimation, useInView } from 'framer-motion';
import './Description.css';
import FloatingImage from '../assets/dummy/contactUs.png'; // Add your image

import dp from '../assets/dp.png';

const Description = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['#000000', '#1a1a1a']
  );

  return (
    <motion.div className="des-main" style={{ background }}>

      <motion.div
        className="des-upper-div"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Description to Author</h1>
      </motion.div>

      <div className="des-lower-div">
        <motion.div
          className="des-lower-divs des-lower-div-left"
          initial={{ opacity: 0, x: 100,y:100 }}
          whileInView={{ opacity: 1, x: 0 ,y:0}}
          transition={{ duration: 1 }}
        >
          <img src={dp} alt="profile-photo" />
        </motion.div>

        <motion.div
          className="des-lower-divs des-lower-div-right"
          initial={{ opacity: 0, x: -100 ,y:-100}}
          whileInView={{ opacity: 1, x: 0,y:0 }}
          transition={{ duration: 1 }}
        >
          <span>
            Hey there! I’m Lakshya Rawat, a passionate software developer,
            problem solver, and tech enthusiast. I love building sleek web
            applications, crafting intelligent AI models, and solving complex
            algorithmic challenges. This website is a glimpse into my
            journey—featuring my best projects, technical skills, and occasional
            insights on development. From full-stack applications to machine
            learning experiments, I’m always working on something exciting. Feel
            free to explore, check out my work, and if you’re interested in
            collaborating, let’s connect!
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
