import { Link } from "react-router-dom";

const PortfolioItem = ({projects, title}) => {
    return ( 
        <div>
            <h2>{title}</h2>
            {projects.map((project) => (
                <div key={project.id}>
                    <Link to={`/project/${project.id}`}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default PortfolioItem;