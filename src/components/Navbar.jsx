import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (

      <div className="navbar">
          <div className="menu-sx">
            <img className="logo" src="/public/vite.svg" alt="" />
          </div>
          <ul className="menu-dx">
              <li><NavLink className="nav-link" to={"/"}>Home</NavLink></li>
              <li><NavLink className="nav-link" to={"/ChiSiamo"}>Chi siamo</NavLink></li>
              <li><NavLink className="nav-link" to={"/Products"}>Products</NavLink></li>
              <li><NavLink className="nav-link" to={"/Post"}>Post</NavLink></li>
          </ul>
      </div>
    );
  } 