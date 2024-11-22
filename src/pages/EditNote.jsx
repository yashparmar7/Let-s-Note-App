import { Link, useParams, useNavigate } from "react-router-dom"
import { IoArrowBackCircle } from "react-icons/io5"
import {  RiDeleteBin6Fill } from "react-icons/ri"
import { useState } from "react";
import useCreateDate from "@/components/useCreateDate";

const EditNote = ({notes, setNotes}) => {

  const {id} = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) =>{
    e.preventDefault();
   
    if(title && details){
      const newNote = {...note, title, details, date}

      const newNotes = notes.map(item => {
        if(item.id == id){
          item = newNote;
        }
        return item;
      })

      setNotes(newNotes);
  }

  // redirect to home page 
  navigate('/');
}

//delete

const handleDelete = () => {
 if(window.confirm('Are you sure you want to delete?')){
  const newNotes = notes.filter(item => item.id !== id);

  setNotes(newNotes);
  navigate('/');
 }
}

  return (
    <section>
        <header className="create-note__header">
            <Link to="/" className="btn">
            <IoArrowBackCircle />
            </Link>
            <button className="btn lg primary" onClick={handleForm}>Save</button>
            <button className="btn danger" onClick={handleDelete}>< RiDeleteBin6Fill/></button>
        </header>
        <form action="" className="create-note__form" onSubmit={handleForm}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
            <textarea rows="28" placeholder="Take a note..." value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
        </form>
    </section>
  )
}

export default EditNote
