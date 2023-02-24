import React, {useState} from "react";

let style = {
  width: "80%",
}

export default function BlogPost (props) {
  const [isOpen, setIsOpen] = useState(false);

  //returns an array of img elements using info passed down from Blog component
  let pictures = props.pictures.map((image)=>{
    return(
      <img src={image.src} alt={image.alt}/>
    )
  })

  return(
    <div className="blog-post" >
      <h3 className="large">{props.title}</h3>
      <h4>{props.date}</h4>
      <p>{props.text}</p>
      <div className="blog-post-images">
        {pictures}
      </div>
    </div>
  );
}