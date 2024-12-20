import { Link, useNavigate } from "react-router-dom"
import { IoArrowBackCircle } from "react-icons/io5"
import { useState } from "react"
import {v4 as uuid} from 'uuid'
import useCreateDate from "../components/useCreateDate"


const CreateNote = ({setNotes}) => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit=(e) =>{
    e.preventDefault();

    if(title && details){
      const note = {id: uuid(), title, details, date}
      //add this note to the Notes array
      setNotes(prevNotes => [note,...prevNotes])
    
      //redirect to home page
      navigate('/')
    }
  }

  return (
    <section>
        <header className="create-note__header">
            <Link to="/" className="btn">
            <IoArrowBackCircle />
            </Link>
            <button className="btn lg primary" onClick={handleSubmit}>Save</button>
        </header>
        <form action="" className="create-note__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea rows="28" placeholder="Take a note..." value={details} onChange={(e) => setDetails(e.target.value)} autoFocus></textarea>
        </form>
    </section>
  )
}

export default CreateNote
