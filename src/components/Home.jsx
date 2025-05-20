import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';



const Home = () => {
  return (
    <div className="home-main-div">
      <div className="home-main-divs home-up">
        <div className="home-up-divs home-up-1">
          <span className="home-up-1-span">LAKSHYA</span>
          <span className="home-up-1-span">RAWAT</span>
        </div>
        <div className="home-up-divs home-up-2">
          <span>
            JAIPUR <br></br>Rajasthan
          </span>
        </div>
        <div className="home-up-divs home-up-3">
          <div className="home-up-3-div">
            <span>Computer Science<br></br> Graduate</span>
          </div>
          <div className="home-up-3-div-2">
            <div><span>95<br></br>29</span></div>
          </div>
        </div>
        <div className="home-up-divs home-up-4"><span>©</span></div>
      </div>
      <div className="home-main-divs home-bottom">
      <TypeAnimation sequence={[
        'Developer.',
        2000,'',1000,'Content Creator.',2000,'',1000,'Software Engineer.',2000,'',1000]
      }speed={60} deletionSpeed={40} wrapper="span" repeat={Infinity} className='typing-text' />
      </div>
    </div>
  );
};

export default Home;
