import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry, </h2>
            <p>That page cannnot be found</p>
            <Link to="/">BACK to the homepage...</Link>
        </div>
    );
}

export default NotFound;