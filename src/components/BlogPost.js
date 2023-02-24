

export default function blogPost (props) {

  //returns an array of img elements using info passed down from Blog component
  let pictures = props.pictures.map((image)=>{
    return(
      <img src={image.src} alt={image.alt}/>
    )
  })

  return(
    <div className="blog-post">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <div className="blog-post-images">
        {pictures}
      </div>

    </div>
  );
}