import { Outlet, Link } from "react-router-dom";
import Logo from "./image/logo.png"


const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light"  id="aaaaaaa">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#"><img className='logo' src={Logo} alt="Logo" /></Link>
                <button className="navbar-toggler bg-light" type="button "
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page"
                                to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Bricole" >BRICOLE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">CONTACT</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link  className="btn_1 btn " aria-current="page"  to="/Login">Login</Link>
                        <Link  className="btn_2 btn " aria-current="page"  to="/Sign">Sign Up</Link>
                    </form>
                </div>
            </div><Outlet/>
        </nav>
        </div>
    
    )
};
export default Navbar;








