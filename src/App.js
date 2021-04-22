import {useState} from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import uuid from 'react-uuid'
import './App.css';

function App() {
  const [notes,setNote] = useState([]);
  const [activeNote,setActiveNote] = useState(false) 

  const addNote = () => {
    const newNote = {
      id:uuid(),
      title:'Untitled',
      body:'fasdfasfasfasfasfasfasf',
      lastModified:Date.now()
    }
    setNote([newNote,...notes])
  }

  const updateNote = (updateNote) => {
    console.log(updateNote);
     const updateArray =  notes.map((note) => {
        if(note.id == activeNote){
         return updateNote;
        }
        return note;
      })
      setNote(updateArray)
  }

  const deleteNote = (id) => {
   const filterNote =  notes.filter((note) => note.id !== id);
    setNote(filterNote)
  }

  const getActiveNote = () => {
    //   if(note.id == activeNote){
    //     setNote([updateNote,...notes])
    //   }
    const data = notes.find((note) => note.id == activeNote);
    console.log(data);
    return data;
  }

  return (
    <div className="App">
      <Sidebar notes={notes} addNote={addNote} deleteNote={deleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main  getActiveNote={getActiveNote()} updateNote={updateNote}/>
    </div>
  );
}

export default App;
