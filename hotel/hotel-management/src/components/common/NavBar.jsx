import "./navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar-main-container">
      <p className="navbar-logo">
        <span className="nav-span-1 ">Del</span>-
        <span className="cedarville-cursive-regular">L</span>una
      </p>
      <ul className="navbar-list-1">
        <Link to="/">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
      <ul className="navbar-list-2">
        <Link to="/bookings">
          <button className="bookings-button">Bookings</button>
        </Link>
        <Link to="/profile">
          <button className="profile-button">Profile</button>
        </Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
}

export default NavBar;
