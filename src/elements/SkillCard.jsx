import React from 'react'
import './SkillCard.css'

const SkillCard = (props) => {
  return (
    <div className='SkillCard-main-div'>
      <div className='SkillCard-title-div'>
        {props.title}
      </div>
      <div className='SkillCard-list-div'>
        {Array.isArray(props.list) ? (
          <ul>
            {props.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{props.list}</p>
        )}
      </div>
    </div>
  )
}

export default SkillCard
