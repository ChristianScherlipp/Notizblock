
function getNoteTemplate(indexNote) {
    return `
    <div  class="note" id="noteColor-${indexNote}">
        <h3>${allNotes.notesTitle[indexNote]}</h3>
        <p>- ${allNotes.notes[indexNote]}</p>
        <div>
            <button class="btnToTrash" onclick="notesToTrash(${indexNote})"></button>
            <button class="btnToArchiv" onclick="notesToArchiv(${indexNote})"></button>
        </div>
    </div`;
}

function getArchivNoteTemplate(indexArchivNote) {
    return `
    <div  class="note">
        <h3>${allNotes.archivNotesTitle[indexArchivNote]}</h3>
        <p>- ${allNotes.archivNotes[indexArchivNote]}</p>
        <div class="note-btn">
        <button class="btnToTrash" onclick="archivToTrash(${indexArchivNote})"></button>
        <button class="btnToNotes" onclick="archivToNote(${indexArchivNote})"></button>
        </div>
    </div`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div  class="note">
        <h3>${allNotes.trashNotesTitle[indexTrashNote]}</h3>
        <p>- ${allNotes.trashNotes[indexTrashNote]}</p>
        <div>
        <button class="btndelete" onclick="deleteNote(${indexTrashNote})"></button>
        <button class="btnToNotes" onclick="trashToNote(${indexTrashNote})"></button>
        </div>
    </div`;
}