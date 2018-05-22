const fs = require('fs');

const addNote = (title, content) => {
    let notes = [];
    if(fs.existsSync('notes-data.json')) {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));        
    }
    const note = {
        title,
        content
    };
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
const removeNote = title => console.log(`${title} removed.`);
const readNote = title => {

}
const getAllNotes = () => JSON.parse(fs.readFileSync('notes-data.json'));

module.exports = {
    addNote,
    removeNote,
    readNote,
    getAllNotes
};