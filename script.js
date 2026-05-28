
let notesTitle =[];
let notes = [];
let archivNotesTitle = [];
let archivNotes = [];
let trashNotesTitle = [];
let trashNotes = [];

const colors = [
    "#4e83ff", "#4effe4",
    "#ff0000", "#894eff",
    "#fcff4e", "#a7ff4e",
    "#77ff4e", "#ff4e86",
    "#4e4eff", "#0022ff",
    "#ca4eff", "#0dff00",
    "#ff4ed9", "#ffe600", 
    "#ffac4e", "#f200ff",
    ];


function init() {
    getFromLocalStorage()
    render()
    renderArchivhNotes()
    renderTrashNotes()
    
}


function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }

    renderColor();
}


function renderArchivhNotes() {
    
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";
    
    for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
        
    }
    renderColor();
}

function renderTrashNotes() {
    
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
        
    }
    renderColor();
}



function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    let titleInputRef = document.getElementById('title_content');
    let titleInput = titleInputRef.value;
    
    if (noteInput != "" && titleInput != "") {
        notes.push(noteInput);
        notesTitle.push(titleInput);
        noteInputRef.value = "";
        titleInputRef.value = "";
    }
    
    saveToLocalStorage();
    render();
    
    
}

function notesToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1 )
    let trashNoteTitle = notesTitle.splice(indexNote, 1);
    if (trashNote != "") {
        trashNotes.push(trashNote[0]);
        trashNotesTitle.push(trashNoteTitle[0]);
    }
    
    saveToLocalStorage();
    render();
    renderArchivhNotes()
    renderTrashNotes();
    
}

function notesToArchiv(indexNote) {
    let archivNote = notes.splice(indexNote, 1 )
    let archivNoteTitle = notesTitle.splice(indexNote, 1 )
    if (archivNote != "") {
        archivNotes.push(archivNote[0]);
        archivNotesTitle.push(archivNoteTitle[0]);
    }
    
    saveToLocalStorage();
    render();
    renderArchivhNotes()
    renderTrashNotes();
    
}

function archivToTrash(indexArchivNote) {
    let trashNote = archivNotes.splice(indexArchivNote, 1 )
    let trashNoteTitle = archivNotesTitle.splice(indexArchivNote, 1 )
    if (trashNote != "") {
        trashNotes.push(trashNote[0]);
        trashNotesTitle.push(trashNoteTitle[0]);
    }
    
    saveToLocalStorage();
    render();
    renderArchivhNotes()
    renderTrashNotes();
    
}

function archivToNote(indexArchivNote) {
    let note = archivNotes.splice(indexArchivNote, 1 )
    let noteTitle = archivNotesTitle.splice(indexArchivNote, 1 )
    if (note != "") {
        notes.push(note[0]);
        notesTitle.push(noteTitle[0]);
    }
    
    saveToLocalStorage();
    render();
    renderArchivhNotes()
    renderTrashNotes();
}

function trashToNote(indexTrashNote) {
    let note = trashNotes.splice(indexTrashNote, 1 )
    let noteTitle = trashNotesTitle.splice(indexTrashNote, 1 )
    if (note != "") {
        notes.push(note[0]);
        notesTitle.push(noteTitle[0]);
    }
    
    saveToLocalStorage();
    render();
    renderArchivhNotes()
    renderTrashNotes();
}



function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1 )
    trashNotesTitle.splice(indexTrashNote, 1 )
    
    saveToLocalStorage();
    render();
    renderArchivhNotes()
    renderTrashNotes();
}

function saveToLocalStorage(){
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitle", JSON.stringify(notesTitle));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNotesTitle", JSON.stringify(trashNotesTitle));
    localStorage.setItem("archivNotes", JSON.stringify(archivNotes));
    localStorage.setItem("archivNotesTitle", JSON.stringify(archivNotesTitle));
}


function getFromLocalStorage() {
    let noteArr = JSON.parse(localStorage.getItem("notes"));
    let noteTitleArr = JSON.parse(localStorage.getItem("notesTitle"));
    let trashNoteArr = JSON.parse(localStorage.getItem("trashNotes"));
    let trashNoteTitleArr = JSON.parse(localStorage.getItem("trashNotesTitle"));
    let archivNoteArr = JSON.parse(localStorage.getItem("archivNotes"));
    let archivNoteTitleArr = JSON.parse(localStorage.getItem("archivNotesTitle"));
    
    if (noteArr == null) {
        return notes, noteTitleArr;
    }
    if (trashNoteArr == null) {
        return trashNotes, trashNoteTitleArr;
    }
    if (archivNoteArr == null) {
        return archivNotes, archivNoteTitleArr;
    }
    
    notes = noteArr;
    notesTitle = noteTitleArr;
    archivNotes = archivNoteArr;
    archivNotesTitle = archivNoteTitleArr;
    trashNotes = trashNoteArr;
    trashNotesTitle = trashNoteTitleArr;
    
}

function renderColor() {
    let allNotes = document.querySelectorAll('.note');

    allNotes.forEach(note => {
        let randomColor = getRandomColor();

        note.style.setProperty("--note-color", randomColor);
    });
}

function getRandomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex];
}