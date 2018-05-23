console.log('Starting app.js');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];
console.log(`Command: ${command}`);

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
    console.log(notes.getAllNotes());
    break;
  default:
    console.log('Command not recognized...');
}