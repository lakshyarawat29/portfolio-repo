import { createRoot } from 'react-dom/client';
import Home from './components/Home';
import Description from './components/Description';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import GetInTouch from './components/GetInTouch';
import MySkill from './components/MySkill';
import './main.css';
createRoot(document.getElementById('root')).render(
  <div>
    <Home />
    <Description />
    <Techstack />
    <Projects />
    <GetInTouch />
  </div>
);
