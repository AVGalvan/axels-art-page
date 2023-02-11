import { NavLink } from "react-router-dom"
export default function Navbar(){
  return(
    <nav className="navbar">
      <h1 className="uppercase"><NavLink to="/">Axel's Art <span className="remove-on-resize">Page</span></NavLink></h1>
      <ul>
        <li><NavLink className="hover-underline-animation" to="/">Home</NavLink></li>
        <li><NavLink className="hover-underline-animation" to="piecegallery">Pieces</NavLink></li>
        <li><NavLink className="hover-underline-animation" to="blog">Blog</NavLink></li>
        <li><NavLink className="hover-underline-animation" to="about">About</NavLink></li>
      </ul>
  </nav>
  )
}