import PortfolioItem from "./PortfolioItem";
import useFetch from "./useFetch";

const Portfolio = () => {
    const { error, data: projects } = useFetch('http://localhost:9000/projects')
    return ( 
    <div>
        { error && <div>{ error }</div> }
        { projects && <PortfolioItem projects={projects} /> }
    </div> 
     );
}
 
export default Portfolio;