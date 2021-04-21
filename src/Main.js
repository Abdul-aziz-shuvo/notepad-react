export default function Main(){
    return(
     <div className="app-main">
         <div className="app-main-note-edit">
             <input type="text"  autoFocus />
             <textarea rows="" cols="" placeholder="write your note here"></textarea>
         </div>

         <div className="app-main-note-preview">
             <h3 className="preview-title"></h3>
             <div className="markdown-preview">
           
             </div>
         </div>
     </div>
    )
}