
function getNoteTemplate(indexNote) {
    return `
    <div  class="note" id="noteColor-${indexNote}">
        <h3>${notesTitle[indexNote]}</h3>
        <p>- ${notes[indexNote]}</p>
        <div>
            <button class="btnNotesLeft" onclick="notesToTrash(${indexNote})"></button>
            <button class="btnNotesRight" onclick="notesToArchiv(${indexNote})"></button>
        </div>
    </div`;
}

function getArchivNoteTemplate(indexArchivNote) {
    return `
    <div  class="note">
        <h3>${archivNotesTitle[indexArchivNote]}</h3>
        <p>- ${archivNotes[indexArchivNote]}</p>
        <div class="note-btn">
        <button class="btnNotesLeft" onclick="archivToTrash(${indexArchivNote})"></button>
        <button class="btnNotesRight" onclick="archivToNote(${indexArchivNote})"></button>
        </div>
    </div`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div  class="note">
        <h3>${trashNotesTitle[indexTrashNote]}</h3>
        <p>- ${trashNotes[indexTrashNote]}</p>
        <div>
        <button class="btnNotesLeft" onclick="deleteNote(${indexTrashNote})"></button>
        <button class="btnNotesRight" onclick="trashToNote(${indexTrashNote})"></button>
        </div>
    </div`;
}