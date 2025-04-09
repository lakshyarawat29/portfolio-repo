import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <div className="main-div">
      <div className="empty-div"></div>
      <div className="main-content-div">
        <h1>Get in Touch</h1>
        <div className='main-content-text-div'>
          <span>
            I'm eager to join a collabrative team where I can contribute my
            skills and learn from others.If you have an exciting project.let's
            discuss how I can be a valuable asset.I'm actively seeking a new
            opportunity to apply my skills and continue growing!
          </span>
        </div>

        <button>Say Hello</button>

        <div className="social-icon-div">
          <a>
            <img src="src/assets/techIcons/LinkedIn.png" />
          </a>
          <a>
            <img src="src/assets/socialMedia/github1.png" />
          </a>
          <a>
            <img src="src/assets/socialMedia/facebook.png" />
          </a>
          <a>
            <img src="src/assets/techIcons/Twitter.png" />
          </a>
          <a>
            <img src="src/assets/socialMedia/insta.png" />
          </a>
        </div>
      </div>

      <div className="end-content-div">
        <span>
          Designed and Coded by <b>Lakshya Rawat</b>.Built with ReactJs,Vanilla
          CSS and Framer Motion,Deployed with Vercel
        </span>
      </div>
    </div>
  );
};

export default GetInTouch;
