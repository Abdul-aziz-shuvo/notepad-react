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
      body:'',
      lastModified:Date.now()
    }
    setNote([newNote,...notes])
  }

  

  const deleteNote = (id) => {
   const filterNote =  notes.filter((note) => note.id !== id);
    setNote(filterNote)
  }

  // const getActiveNote = () => {
  //  alert(activeNote);

  //   // eslint-disable-next-line 
  // let data =  notes.find((note) => note.id == activeNote)
  // }

  return (
    <div className="App">
      <Sidebar notes={notes} addNote={addNote} deleteNote={deleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main  />
    </div>
  );
}

export default App;
