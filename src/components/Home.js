import { NavLink } from "react-router-dom"

export default function Home (){
  return(
    <div className="home">
        <div className="hero">
          <h2 className="uppercase">
            Wherever you go, there you are
          </h2>
        </div>

        
          <p className="width-80">
            Thank you for checking out this corner of the internet!
            My name is Axel, but unless you've blindly stumbled onto a random webpage (in which case, hello stranger) you probably already knew that. I have set up this website as a place to point someone towards if they were to show interest in my artistic work or endeavors and wanted to see more examples of my <NavLink to="pieces">actual works</NavLink>. This is also an exercise in web development and a way to benchmark my progress as I continue to learn about programming. One is never finished learning, and I have found that documenting my thoughts as I learn promotes a deeper understanding of the material I am studying and the headspace I was in at the time, so I have also set up a blog page within the website where I can post thoughts, progress updates, announcements, or other media that doesn't readily fall into the purview of other parts of my site.
          </p>
      
      </div>
  )
}