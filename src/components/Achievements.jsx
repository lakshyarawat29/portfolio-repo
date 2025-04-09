import React from 'react';
import lc_logo from '../../public/logos/lc.png';
import './Achievements.css';
import BadgeScroller from '../elements/BadgeScroller';
const Achievements = () => {
  return (
    <div className="main-div">
      <div className="heading-div">
        <h1>Achievements</h1>
      </div>
      <div className="upper-av-div">
        <div className="upper-av-div-upper">
          <a href="https://leetcode.com/u/lakshyarawat29/">
            <img src={lc_logo} />
          </a>
        </div>
        <div className="upper-av-div-lower">
          <BadgeScroller />
        </div>
      </div>
      <div className="lower-av-div">
        <div className="lower-av-div-left">
          <div className="rating-panel-div">
            <div className="item-1 rating-panel-card">
              <a>
                <img src={lc_logo} height={'100vw'} width={'180vw'}/>
              </a>
              <span>Rating:1641</span>
            </div>
            <div className="item-2 rating-panel-card">
              <a>
                <img src='src/assets/icons/cf1.png' height={'30vw'} width={'170vw'}/>
              </a>
              <span>Rating:1641</span>
            </div>
            <div className="item-3 rating-panel-card">
              <a>
                <img src='src/assets/icons/atcoder.png' height={'100vw'} width={'180vw'}/>
              </a>
              <span>Rating:1641</span>
            </div>
            <div className="item-4 rating-panel-card">
              <a>
                <img src='src/assets/icons/gfg.png' height={'100vw'} width={'180vw'} />
              </a>
              <span>Rating:1641</span>
            </div>
          </div>
        </div>
        <div className="lower-av-div-right">
          <div className="problem-panel-div"></div>
          <div className="coding-profile-div">
            {/* <a href="https://leetcode.com/u/lakshyarawat29/">
                <img src="src/assets/icons/leetcode.png" />
              </a>
              <a href="https://www.naukri.com/code360/profile/lakshyarawat29">
                <img src="src/assets/icons/codestudio.png" />
              </a>
              <a href="https://codeforces.com/profile/lakshyarawat_29">
                <img src="" />
              </a>
              <a href="https://www.hackerrank.com/profile/22ucs113">
                <img src="src/assets/icons/hackerrank.png" />
              </a>
              <a
                href="https://atcoder.jp/users/lakshyarawat29"
                className="atcoders"
              >
                <img src="src/assets/icons/atcoder.png" />
              </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
