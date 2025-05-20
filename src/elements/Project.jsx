import React from 'react';
import './Project.css';
import GitHub from '../assets/techIcons/Github.png';

const Project = ({ project_name, project_desc, project_links }) => {
  return (
    <div className="project-main">
      <div className="project-title-div">
        {project_name}
      </div>
      <div className="project-desc-div">
        <div className="desc-div-upper">{project_desc}</div>
        <div className="desc-div-lower">
          <a
            href={project_links}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <img src={GitHub} alt="GitHub Repo" className="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
