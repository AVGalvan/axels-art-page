import { Suspense, useState } from "react";
import Modal from "react-modal";


export default function Piece (props){
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () =>{
    setIsOpen(true);
  }

  const closeModal = () =>{
    setIsOpen(false);
  }


  return(
    <>
    <div className="piece grow" onClick={openModal}>
      <img src={props.src} alt={props.alt}/>
    </div>

    <Suspense>
      <Modal 
      className="Modal"
      overlayClassName="Overlay"
      isOpen={modalIsOpen}>
        <button onClick={closeModal}>x</button>
        <img src={props.src} alt={props.alt}/> 
        <h3>"{props.title}"  {props.medium} {props.date} </h3>
        <p>{props.description}</p>
      </Modal>
      </Suspense>
    </>
  )
}