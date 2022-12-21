import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark d-flex sticky-top border-bottom">
            <div className="container">
                <img src="assets/images/logo.png" alt="Logo" />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-link">
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/education" className="nav-link">
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts" className="nav-link">
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;