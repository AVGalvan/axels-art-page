import { useState } from "react";
import Modal from "react-modal";
import { finishedPieces } from "./Helper";
import Piece from "./Piece";







export default function PieceGallery () {
  const [counter, setCounter] = useState(0);
  let pieces = finishedPieces.map((piece, index)=> {
    return(
      <Piece
       title={piece.title}
       date={piece.date}
       medium={piece.medium}
       description={piece.description}
       alt={piece.alt}
       src={piece.src}
       /> 
    )
  })



  return(
    <div className="gallery-container">
      <div className="gallery">

      {pieces}



      {/* <div className="grow">
        <img src="images/artwork-images/finishedPieces/money-warts-min.jpeg" alt="Frog in a suit with a cigar"className=" img-1"/>
      </div> 

      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/honey-pastels-min.jpeg" alt="Colored piece of food containers" className=" img-2"/>
      </div> 

      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/denizen-of-the-burrow-min.jpeg" alt="Colored piece of a rabbit in a button down shirt"className=" img-3"/>
      </div>
      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/papers-min.jpeg" alt="Toilet paper and paper towels depicted in grayscale" className=" img-4"/>
      </div> 

      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/regal-dragon-detailed-color-min.png" alt="Colored piece of a dragon in armor" className=" img-5"/>
      </div>
      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/self-portrait-min.JPEG" alt="Self portrait of the artist" className=" img-6"/>
      </div> 

      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/turtle-neck-guy-min.JPEG" alt="portrait of a man in a turtle neck sweater" className=" img-7"/>
      </div> 

      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/aaron-portrait-min.JPEG" alt="portrait of a young man" className=" img-8"/>
      </div> 

      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/angler-fish-min.png" alt="colored piece of an anglerfish" className=" img-9"/>
      </div> 


      <div className="grow">
        <img src="images/artwork-images/finishedPieces/art-room-min.jpeg" alt="Perspective drawing of an art room" className=" img-10"/>
      </div> 

      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/charizard-wallpaper-min.png" className=" img-11" alt="Colored piece of a dragon"/>
      </div>
      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/column-min.jpeg" className=" img-12" alt="Grayscale study of a column"/>
      </div> 

      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/containers-min.jpeg" className=" img-13" alt="Grayscale study of some containers"/>
      </div> 

      
      <div className="grow">
        <img src="images/artwork-images/finishedPieces/dad-drawing-min.JPEG" className=" img-14" alt="Portrait of my father"/>
      </div> 

      <div className="grow">
        <img src="images/artwork-images/finishedPieces/glass-jars-charcoal-min.JPEG"  className=" img-15" alt="img-15" />
      </div>

      <div className="grow">
        <img src="images/artwork-images/finishedPieces/mannequin-charcoal-min.JPEG" className=" img-16" alt="Still life of a mannequin and some other objects"/>
      </div>

      <div className="grow">
        <img src="images/artwork-images/finishedPieces/red-owl-min.JPEG" className=" img-17" alt=""/>
      </div>
       */}

      </div>
    </div>
  )
}