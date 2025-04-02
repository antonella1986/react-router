import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (

      <nav>
        <ul>
          <li><NavLink className="nav-link" to={"/"}>Home</NavLink></li>
          <li><NavLink className="nav-link" to={"/ChiSiamo"}>Chi siamo</NavLink></li>
          <li><NavLink className="nav-link" to={"/Post"}>Post</NavLink></li>
        </ul>
      </nav>
      
    );
  } 