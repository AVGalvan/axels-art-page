import React, {useState} from "react";

let hiddenStyle = {
  overflow: "hidden",
  maxHeight: "250px",
};

let openStyle = {

};

export default function BlogPost (props) {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState(hiddenStyle);

  
  const handleClick = () =>{
    if(isOpen){
      setIsOpen(false);
      setStyle(hiddenStyle);
    } else {
      setIsOpen(true);
      setStyle(openStyle);
    }
  }



//returns an array of img elements using info passed down from Blog component
  let pictures = props.pictures.map((image)=>{
    return(
      <img src={image.src} alt={image.alt}/>
    )
  })

  return(
    <div className="wrapper">
      <div className="blog-post" style={style}>
        <div className="intro">
          <h3 className="large">{props.title}</h3>
          <h4>{props.date}</h4>
          <p className="hook">{props.hook}</p>
          <button 
          style={!isOpen ? {display: "block"} : {display: "none"}}
          onClick={handleClick}
          className="show-post-button">Show Post</button>
        </div>

        <div className="blog-content" style={!isOpen ? {display: "none"} : {display: "block"}}>
          <p>{props.text}</p>
          <div className="blog-post-images">
            {pictures}
          </div>
          <button 
          style={{display:"block"}}
          className="close-post-button" onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>

  );
}