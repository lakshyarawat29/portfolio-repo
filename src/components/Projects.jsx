import React from 'react';
import './Projects.css';
import Project from '../elements/Project';

const Projects = () => {
  return (
    <div className="main-project-div">
      <div className='project-heading-div'>
        <h1>PROJECTS</h1>
      </div>

      <div className="upper-div">
        <Project
          project_name="Financial Analysis using Deep Learning"
          project_desc="Developed an LSTM-based stock price prediction model using historical market data, improving forecasting accuracy by leveraging time series analysis and recurrent neural networks."
          project_links="https://github.com/lakshyarawat29/Financial-Analysis-Using-DL"
        />

        <Project
          project_name="Threat Analysis for industrial SCM"
          project_desc=" Conductedacomprehensivethreatanalysisofindustrialmanufac- turing supply chains utilizing the STRIDE framework
to identify and evaluate potential security threats.
• various threat categories including Spoofing, Tampering, Repudi- ation, Information Disclosure, Denial of Service,
and Elevation of Privilege.
• Developed strategies and recommendations to mitigate identified risks and enhance the security posture of supply
chain systems."
          project_links="https://github.com/lakshyarawat29/Financial-Analysis-Using-DL"
        />
      </div>
      <div className="lower-div">
        <Project
          className="left-lower"
          project_name="Traffic Sign Recognition"
          project_desc="Developed a CNN-based Traffic Sign Recognition system using TensorFlow and OpenCV, achieving over 95
          Preprocessed and augmented image data to improve model generalization, applying techniques like histogram equalization, rotation, and contrast adjustments.
          Implemented a real-time traffic sign detection system using OpenCV, enabling live recognition of road signs from camera feeds for autonomous driving applications."
          project_links="https://github.com/lakshyarawat29/Financial-Analysis-Using-DL"
        />
        <Project
          project_name="Personal Portfolio"
          project_desc="Designed a clean UI, improving load time by 20%.
          Deployed on Vercel, achieving 99% uptime.Developed a responsive portfolio website using React.js, Javascript, and Vanilla CSS to showcase projects and skills."
          project_links="https://github.com/lakshyarawat29/Financial-Analysis-Using-DL"
        />
      </div>
    </div>
  );
};

export default Projects;
