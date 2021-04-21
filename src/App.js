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

  

  const deleteNote = (id) => {
   const filterNote =  notes.filter((note) => note.id !== id);
    setNote(filterNote)
  }

  const getActiveNote = () => {
    const data = notes.find((note) => note.id == activeNote);
    console.log(data);
    return data;
  }
  getActiveNote()
  return (
    <div className="App">
      <Sidebar notes={notes} addNote={addNote} deleteNote={deleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main  getActiveNote={getActiveNote()}/>
    </div>
  );
}

export default App;
