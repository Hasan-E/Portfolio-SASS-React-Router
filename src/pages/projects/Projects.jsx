import { data } from "../../helpers/imageData";
import "./Projects.scss"
const Projects = () => {
  return (
    <div className="projectContainer">
      <h2 className="projectTitle">My Projects</h2>
      <div className="projects">
        {data.map((project) => (
          <div key={project.id} className="imgDiv">
            <img src={project.img} alt={project.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
