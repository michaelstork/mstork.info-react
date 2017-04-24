import React from 'react';
import './Skills.css';
 
const SkillsList = (props) => {
  return (
    <div className="Skills-list">
      {props.skills.map((group, groupIndex) =>
        <div className="Skills-list-group" key={groupIndex}>
          {group.map((list, listIndex) =>
            <div key={listIndex}>
              <p>{list.title}</p>
              <ul>
                {list.skills.map((skill, skillIndex) =>
                  <li key={skillIndex}>
                    <a href={skill.url} target="_blank">{skill.title}</a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SkillsList;