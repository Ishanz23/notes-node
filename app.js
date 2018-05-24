const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const contentOptions = {
  describe: 'Content of note',
  demand: false,
  alias: 'c'
};

const argv = yargs.
command('add', 'Add a new note', {
  title: titleOptions,
  content: contentOptions
})
  .command('list', 'List all notes')
  .command('read', 'Read note', {
    title: titleOptions
  })
  .command('remove', 'Remove note', {
    title: titleOptions
  })
  .help()
  .argv;
const command = argv._[0];

switch (command) {
  case 'add':
    const note = notes.addNote(argv.title, argv.content);
    if (note) {
      console.log('Note created');
      notes.logNote(note);
    }
    break;
  case 'remove':
    notes.removeNote(argv.title);
    break;
  case 'read':
    const noteRead = notes.readNote(argv.title);
    if (noteRead) {
      notes.logNote(noteRead);
    } else {
      console.log(`Note with ${argv.title} not found`);
    }
    break;
  case 'list':
    const allNotes = notes.getAllNotes();
    console.log(`Printing ${allNotes.length} note${allNotes.length > 1 ? 's': ''}`);
    allNotes.forEach(note => notes.logNote(note));
    break;
  default:
    console.log('Command not recognized...');
}