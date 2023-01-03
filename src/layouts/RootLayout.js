import { NavLink, Outlet } from "react-router-dom"
export default function Navbar(){
  return(
    //The root layout is just a navbar and whatever element is currently being rendered
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <h1 className="uppercase">Axel's art page</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="pieces">Pieces</NavLink>
          <NavLink to="blog">Blog</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </ header>

      <main>
        <Outlet />
      </main>
      
    </div>
  )
}
