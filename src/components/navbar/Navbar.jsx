import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "null" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <p>{user.username}</p>
            <button className="navButton" onClick={handleClick}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
