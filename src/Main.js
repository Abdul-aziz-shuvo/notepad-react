export default function Main({getActiveNote,updateNote}){
    const changeNote = (key,value) => {
        
        updateNote({
          ...getActiveNote,
          [key] : value,
          lastModified: Date.now()
        })
    }

    if (!getActiveNote) return <div className="no-active-note">No Active Note</div>;
    return(
     <div className="app-main">
         <div className="app-main-note-edit">
             <input type="text"  autoFocus value={getActiveNote.title} onChange={(e) => changeNote('title',e.target.value)} />
             <textarea rows="" cols="" placeholder="write your note here" value={getActiveNote.body} onChange={(e) => changeNote('body',e.target.value)}></textarea>
         </div>

         <div className="app-main-note-preview">
             <h3 className="preview-title">{getActiveNote.title}</h3>
             <div className="markdown-preview">
             {getActiveNote.body}
             </div>
         </div>
     </div>
    )
}
//   if(note.id == activeNote){
//     setNote([updateNote,...notes])
//   }