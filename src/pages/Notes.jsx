import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
import { RiStickyNoteAddFill } from "react-icons/ri"
import NoteItem from "../components/NoteItem"
import { useEffect, useState } from "react"
import { IoIosCloseCircle } from "react-icons/io"


const Notes = ({notes}) => {

  const[showSearch, setShowSearch] = useState(false);
  const[searchText, setSearchText] = useState('');
  const[filteredNotes, setFilteredNotes] = useState(notes)

  const handleSearch= () => {
    setFilteredNotes(notes.filter(note =>{
      if(note.title.toLowerCase().match(searchText.toLocaleLowerCase())){
        return note;
      }
    }))
  }

  useEffect(handleSearch, [searchText])

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>let`s Notes</h2> }
        {showSearch && <input type="text" value={searchText} onChange={(e) => {setSearchText(e.target.value); handleSearch();}} autoFocus placeholder="Keyword..."/> }
        <button className="btn" onClick={() => setShowSearch(prevState => !prevState)}>
          {showSearch ? <IoIosCloseCircle /> :  <FaSearch />}
        </button>
      </header>

      <div className="notes__container">
        {
          filteredNotes.length == 0 && <p className="empty__notes"> Not Found!</p>
        }
        {
          filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </div>

      <Link to="/create-note" className="btn add__btn">
      <RiStickyNoteAddFill />
      </Link>
    </section>
  )
}

export default Notes
