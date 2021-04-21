export default function Main({getActiveNote}){
    if (!getActiveNote) return <div className="no-active-note">No Active Note</div>;
    return(
     <div className="app-main">
         <div className="app-main-note-edit">
             <input type="text"  autoFocus value={getActiveNote.title}/>
             <textarea rows="" cols="" placeholder="write your note here"></textarea>
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