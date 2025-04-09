import './MySkill.css';

export default function MySkill() {
  const frontEndSkills = [
    "HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT JS", "ZUSTAND", "TAILWIND CSS",
    "FRAMER MOTION", "DOM", "UNIT TEST", "PERFORMANCE OPTIMIZE", "SSR"
  ];

  const backEndSkills = [
    "NODE", "BUN", "EXPRESS", "REST API", "ZOD VALIDATION", "JWT/OAUTH",
    "SQL", "POSTGRES", "PRISMA ORM", "DB MODELING", "STRIPE PAYMENTS"
  ];

  const miscSkills = [
    "JAVASCRIPT", "TYPESCRIPT", "PYTHON", "GO", "REACT NATIVE", "GIT", "GITHUB",
    "LINUX", "WORDPRESS", "VPS", "VERCEL", "UX/UI DESIGN", "PRODUCT DESIGN",
    "FIGMA", "ADOBE XD", "WIREFRAME"
  ];

  return (
    <div className="skills-container">
      <div className="skills-title">MY SKILLS</div>

      <div className="skills-columns">
        <div className="skills-column">
          {frontEndSkills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>

        <div className="skills-column">
          {backEndSkills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {miscSkills.map(skill => (
          <span key={skill} className="skill-tag grid-skill">{skill}</span>
        ))}
      </div>
    </div>
  );
}
