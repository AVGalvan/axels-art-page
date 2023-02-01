import { NavLink } from "react-router-dom";
export default function Footer(){
  return(
    <footer className="footer">
      <ul className="width-80">
        <li><NavLink className="hover-underline-animation" to="/">Home</NavLink></li>
        <li><NavLink className="hover-underline-animation" to="pieces">Pieces</NavLink></li>
        <li><NavLink className="hover-underline-animation" to="blog">Blog</NavLink></li>
        <li><NavLink className="hover-underline-animation" to="about">About</NavLink></li>
      </ul>
    </footer>
  )
}