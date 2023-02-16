import React, {Suspense} from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function RootLayout(){
  return(
    //The root layout is just a navbar and whatever element is currently being rendered
    <div className="root-layout">
      <header>
        <Navbar />
      </ header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

        <Footer/>
      
    </div>
  )
}
