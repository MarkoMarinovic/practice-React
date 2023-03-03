import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Page not found</h2>
            <h3>Jeebiga</h3>
            <Link to="/">Ajmo na pocetnu</Link>
        </div>
     );
}
 
export default NotFound;