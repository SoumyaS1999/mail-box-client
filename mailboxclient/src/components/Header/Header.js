import { Link, NavLink } from "react-router-dom";
import "../../App.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Mail Box Client
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <NavLink className="nav-link" to="/">
                Home
                <span class="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  style={{ position: "fixed", right: "20px" }}
                >
                  Login
                </NavLink>
              </li>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
