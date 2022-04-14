import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The Page you're trying to access doesn't exist!</p>
            <Link to='/'>Back to Home...</Link>
        </div>
     );
}

export default NotFound;