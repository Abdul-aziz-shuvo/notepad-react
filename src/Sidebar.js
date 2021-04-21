export default function Sidebar({notes,addNote,deleteNote,activeNote,setActiveNote}){
    return (
        <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button type="button" onClick={addNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
            {notes.map((note) => {
                return (
                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                    <div className="sidebar-note-title">
                        <h4>{note.title}</h4>
                        <button type="button" onClick={() => deleteNote(note.id)}>Delete</button>
                    </div>
                    <p>{note.body.substr(0,20) + '...'}</p>
                    <small className="note-meta">
                        last-modified : { new Date(note.lastModified).toLocaleDateString('en-us')}
                    </small>
                </div>
                )
              
            })}
            
        </div>
         
    </div>
    )
}