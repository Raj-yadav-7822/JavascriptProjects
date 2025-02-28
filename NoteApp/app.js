// const addBtn = document.querySelector("#addBtn");
// const main = document.querySelector("#main")

// addBtn.addEventListener("click",function(){
// addNote()
// })

// const saveNotes=()=>{
//     const notes= document.querySelectorAll(".note textarea");
//     console.log(notes);
//     const data = [];
//     notes.forEach(
//         (note)=>{
//         data.push(note.value)
//     })
//     localStorage.setItem("notes", JSON.stringify(data))
// }


// const addNote=()=>{
//     const note = document.createElement('div');
//     note.classList.add('note');
//     note.innerHTML=`
//     <div class="tool">
//                 <i class="save fas fa-save"></i>
//                 <i class="trash fas fa-trash"></i>
//             </div>
//             <textarea></textarea>
    
//     `
//     note.querySelector('.trash').addEventListener("click",function(){
//         note.remove()
//     })
//     note.querySelector('.save').addEventListener("click",function(){
//         saveNotes()
//     })
//     main.appendChild(note)
//     saveNotes()
// }






 const addBtn = document.querySelector("#addBtn");
 const main = document.querySelector("#main");

// 📝 Save Notes to Local Storage
 const saveNotes = () => {
    const notes = [...document.querySelectorAll(".note textarea")].map(note => note.value);
     localStorage.setItem("notes", JSON.stringify(notes));
 };

// ➕ Create a new Note
 const createNote = (text = "") => {
     const note = document.createElement("div");
    note.className = "note";
    note.innerHTML = `
        <div class="tool">
            <i class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i> 
        </div>
        <textarea>${text}</textarea>
    `;

     const textarea = note.querySelector("textarea");
     const trashBtn = note.querySelector(".trash");

    textarea.addEventListener("input", saveNotes);
    trashBtn.addEventListener("click", () => {
        note.remove();         saveNotes();
    });

    main.appendChild(note);
 };

// 🔄 Load Notes from Local Storage
JSON.parse(localStorage.getItem("notes") || "[]").forEach(createNote);

//  ➕ Add Note on Button Click
 addBtn.addEventListener("click", () => createNote());
