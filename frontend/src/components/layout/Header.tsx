import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">

        {/* LEFT — LOGO */}
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span className="logo-text">
            Zeex<span className="ai-text">AI</span>
          </span>
        </div>

        {/* CENTER — NAV LINKS */}
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/" data-text="Home" className="nav-link slide-link">
              <span>Home</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" data-text="About" className="nav-link slide-link">
              <span>About</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/solutions" data-text="Solutions" className="nav-link slide-link">
              <span>Solutions</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/services" data-text="Services" className="nav-link slide-link">
              <span>Services</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/blogs" data-text="Blogs" className="nav-link slide-link">
              <span>Blogs</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" data-text="Contact" className="nav-link slide-link">
              <span>Contact</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/careers" data-text="Career" className="nav-link slide-link">
              <span>Careers</span>
            </NavLink>
          </li>
        </ul>

        {/* RIGHT — BUTTON */}
        <div className="demo-btn">
          <button className="get-demo">Get Demo</button>
        </div>

      </div>
    </header>
  );
};

export default Header;
