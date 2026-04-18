import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import LoginForm from "./LoginForm";
import AuthContext from "../contexts/auth/AuthContext";

import Button from "@mui/material/Button";
const Header = () => {
  const { isLoggedIn, logoutUser, userInfo, isShownLoginForm, showLoginForm } =
    useContext(AuthContext);
  return (
    <>
    <header>
      <div className="header-block">
        <h1>Tripma</h1>
        <nav>
          <ul className="main-list">
            <li className="item-header">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="item-header">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="users"
              >
                Users
              </NavLink>
            </li>
            <li className="item-header">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="hotels"
              >
                Hotels
              </NavLink>
            </li>
            {isLoggedIn ? (
          <>
            
            <Button variant="outlined" onClick={logoutUser} size="small">
              Log Out
            </Button>
            <li className="loggedin-user">
              <img
                src={userInfo.image}
                alt={userInfo.firstName}
                className="loggedin-image"
              />
            </li>
          </>
        ) : (
          <Button variant="contained" size="small" onClick={showLoginForm}>
            Log In
          </Button>
        )}
          </ul>
          
        </nav>
      </div>
      <hr />
      
      {isShownLoginForm && <LoginForm />}
      
      
      
    </header>
    
    <Outlet />
    </>
  );
};

export default Header;
