import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  
  return (
    <div className="header">
      
      <h2 className="main">React Router</h2>
      
      <nav className="nav">
        <ul className="menu">
          <li className="item-header">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
              end
            >
              <p className="text">Home</p>
            </NavLink>
          </li>
          <li className="item-header">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="users"
            >
              <p className="text">Users</p>
            </NavLink>
          </li>
       
          <li className="item-header">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="hotels"
            >
              <p className="text">Hotels</p>
            </NavLink>
          </li>

        </ul>
      </nav>

      <hr />

      <Outlet  />

      
    </div>
  );
};

export default Header;
