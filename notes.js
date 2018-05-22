console.log('File has been executed');

const addNote = (title, content) => console.log(`${title} : ${content}`);
const removeNote = title => console.log(`${title} removed.`);
const readNote = title => console.log(`Reading ${title}`);
const getAllNotes = () => console.log('Getting all Notes');

module.exports = { addNote, removeNote, readNote, getAllNotes };
