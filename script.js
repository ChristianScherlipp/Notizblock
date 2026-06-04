
let allNotes = {
    'notesTitle' : [],
    'notes' : [],
    'archivNotesTitle' : [],
    'archivNotes' : [],
    'trashNotesTitle' : [],
    'trashNotes' : [],
}

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
    getFromLocalStorage();
    render();
    renderArchivhNotes();
    renderTrashNotes(); 
}

function render() {
    let contentRef = document.getElementById('content');
    if (!contentRef) return;
    contentRef.innerHTML = "";
    if (allNotes && allNotes.notes) {
        for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
            contentRef.innerHTML += getNoteTemplate(indexNote);
        }
    }
    renderColor();
}

function renderArchivhNotes() {
    let archivContentRef = document.getElementById('archiv_content');
    if (!archivContentRef) return;
    archivContentRef.innerHTML = "";
    if (allNotes && allNotes.archivNotes) {
        for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
            archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
        }
    }
    renderColor();
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    if (!trashContentRef) return;
    trashContentRef.innerHTML = "";
    if (allNotes && allNotes.trashNotes) {
        for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
            trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
        }
    }
    renderColor();
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let titleInputRef = document.getElementById('title_content');
    if (!noteInputRef || !titleInputRef) return;
    let noteInput = noteInputRef.value;
    let titleInput = titleInputRef.value;
    
    if (noteInput != "" && titleInput != "") {
        allNotes.notes.push(noteInput);
        allNotes.notesTitle.push(titleInput);
        noteInputRef.value = "";
        titleInputRef.value = "";
    }
    saveToLocalStorage();
    render();
}

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1 )[0];
    let noteTitle = allNotes[startKey + 'Title'].splice(indexNote, 1)[0];

        allNotes[destinationKey].push(note);
        allNotes[destinationKey + 'Title'].push(noteTitle);
    
    saveToLocalStorage();
    render();
    renderArchivhNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1 )
    allNotes.trashNotesTitle.splice(indexTrashNote, 1 )
    saveToLocalStorage();
    render();
    renderArchivhNotes();
    renderTrashNotes();
}

function saveToLocalStorage(){
    localStorage.setItem("allNotesData", JSON.stringify(allNotes));
    
}

function getFromLocalStorage() {
    try {
        let loadedData = JSON.parse(localStorage.getItem("allNotesData"));
        if (loadedData == null && typeof loadedData === 'object' && loadedData.notes) {
            allNotes = loadedData;
        }else {
            resetStorage();
        }
    } catch (e) {
        resetStorage();
    }
}

function resetStorage() {
    allNotes = {
        'notesTitle' : [],
        'notes' : [],
        'archivNotesTitle' : [],
        'archivNotes' : [],
        'trashNotesTitle' : [],
        'trashNotes' : [],
    };
    saveToLocalStorage();
}

function renderColor() {
    let noteElements = document.querySelectorAll('.note');
    noteElements.forEach(note => {
        let randomColor = getRandomColor();
        note.style.setProperty("--note-color", randomColor);
    });
}

function getRandomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex];
}