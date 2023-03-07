import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const activeClass = (params) => {
        return params.isActive ? "nav-link active" : "nav-link"
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Hello Motherfcker
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/Home" className={activeClass}>Home</NavLink>
                            <NavLink to="/Product" className={activeClass}>Product</NavLink>
                            <NavLink to="/Profile" className={activeClass}>Profile</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
