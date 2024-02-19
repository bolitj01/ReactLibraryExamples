import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Topics = () => {

    const [query, setQuery] = useState("");

    return (
        <div>
            <h2>Topics</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>

                <li><Link to="components">Components</Link></li>
                <li><Link to="props-v-state">Props v. State</Link></li>

                {/* Using state to put a query into a Link path */}
                <li>
                    <input onChange={(e) => setQuery(e.target.value)} type="text" name="searchTxt" id="searchTxt" />
                    <Link to={`search/${query}`}>Search</Link>
                </li>
            </ul>

            <Outlet />
            {/* Nested routes/components render in place of Outlet */}
        </div>
    )
};

export default Topics;