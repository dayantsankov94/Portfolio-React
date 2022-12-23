import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';



const Navbar = () => {
    const [showCollapsed,setShowCollapsed] = useState(false);

    const clickHandler = () => {
        setShowCollapsed(!showCollapsed);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark d-flex sticky-top border-bottom">
            <div className="container">
                <a href="/" onClick={clickHandler}>
                    <img src="assets/images/logo.png" alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                    aria-controls="navmenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={clickHandler}
                    
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={showCollapsed ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navmenu">
                    <ul className="navbar-nav ms-auto" >
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" onClick={clickHandler}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-link" onClick={clickHandler}>
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" onClick={clickHandler}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/education" className="nav-link" onClick={clickHandler}>
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={clickHandler}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts" className="nav-link" onClick={clickHandler}>
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