import React from 'react';
import SkillCard from '../elements/SkillCard';
import './MySkill.css';

const MySkill = () => {
  return (
    <div className="skills-main-div">
      <div className="skills-title-div">
        <h1>SKILLS</h1>
      </div>
      <div className="skills-skillcard-div">
        <SkillCard
          title="Development"
          list={[
            'React',
            'Node.JS',
            'Typescript',
            'MongoDB',
            'MySql',
            'Express',
            'Authentication',
          ]}
        />
        <SkillCard 
          title='Problem Solving'
          list={['Data Structures And Algorithms','Competitve Programming']}
        />
        <SkillCard 
          title='Software Development'
          list={['Java','C++','C','Golang','Solidity','Rust','Javascript']}
        />
        <SkillCard 
          title='Machine Learning'
          list={['Python','Deep Learning','Advanced DL using Computer Vision']}
        />
      </div>
    </div>
  );
};

export default MySkill;
