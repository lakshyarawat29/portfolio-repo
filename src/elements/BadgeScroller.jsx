import React from 'react';
import "./BadgeScroller.css"

const badges = [
  'src/assets/badges/badge1.gif',
  'src/assets/badges/badge2.gif',
  'src/assets/badges/badge3.gif',
  'src/assets/badges/badge4.gif',
  'src/assets/badges/badge5.gif',
  'src/assets/badges/badge6.gif',
  'src/assets/badges/badge7.gif',
  'src/assets/badges/badge8.gif',
  'src/assets/badges/badge9.gif',
  'src/assets/badges/badge10.gif',
];
const BadgeScroller = () => {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-track">
        {badges.concat(badges).map((badge, idx) => (
          <img
            key={idx}
            src={badge}
            alt={`badge-${idx}`}
            className="badge-img"
          />
        ))}
      </div>
    </div>
  );
};

export default BadgeScroller;
