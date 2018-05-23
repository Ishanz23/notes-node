const fs = require('fs');

const fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));        
    } catch (e) {
        return [];
    }
};

const saveNotes = notes => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, content) => {
    const notes = fetchNotes();
    const note = {
        title,
        content
    };
    const duplicateNote = notes.filter( note => note.title === title);
    if (duplicateNote.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log(`Note with title "${title}" already exist.`);
    }
}

const removeNote = title => {
    const notes = fetchNotes();
    if (notes.length > 0) {
        const updatedNotes = notes.filter(note => note.title !== title);
        saveNotes(updatedNotes);
    } else {
        console.log('No notes exist.')
    }
}
const readNote = title => {
    const notes = fetchNotes();
    return notes.filter(note => note.title === title)[0];
}

const getAllNotes = () => JSON.parse(fs.readFileSync('notes-data.json'));

const logNote = note => {
    console.log('---');
    console.log(`Title : ${note.title}`);
      console.log(`Content : ${note.content}`);
}
module.exports = {
    addNote,
    removeNote,
    readNote,
    getAllNotes,
    logNote
};