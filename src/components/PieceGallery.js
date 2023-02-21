import React, {useState, Suspense } from "react";
import { finishedPieces, sketches } from "./Helper";
const Piece = React.lazy(() => import("./Piece"))







export default function PieceGallery () {
  const [worksDisplayed, setWorksDisplayed] = useState(finishedPieces);

  //checks the state and sets the inline style accordingly
  const setButtonStyle = (desiredPieceArray) => {
    if (worksDisplayed === desiredPieceArray) {
      return {textDecoration: "underline"}
    } else {
      return {textDecoration: "none"}
    }
  }

  let pieces = worksDisplayed.map((piece, index)=> {
      return(
        <>
  
        <Suspense>
          <Piece
          title={piece.title}
          date={piece.date}
          medium={piece.medium}
          description={piece.description}
          alt={piece.alt}
          src={piece.src}
          /> 
        </Suspense>
        </>
      )
  })




  return(
    <div className="gallery-container">
      <div className="gallery-selection">
        <button id="finishedWorksButton" style={setButtonStyle(finishedPieces)} onClick={()=>{setWorksDisplayed(finishedPieces)}}>Finished Works</button>
        <button id="sketchesButton" style={setButtonStyle(sketches)} onClick={()=>{setWorksDisplayed(sketches)}}>Sketches</button>
      </div>
      <div className="gallery">
      {pieces}

      </div>
    </div>
  )
}