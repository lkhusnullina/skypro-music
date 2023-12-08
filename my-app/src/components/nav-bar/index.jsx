import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <ul className="Nav-bar">
                <li>
                    <Link className="app-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="app-link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}