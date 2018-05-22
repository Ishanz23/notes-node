console.log('Starting app.js');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes= require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];
console.log(`Command: ${command}`);

switch(command) {
  case 'add':
    notes.addNote(argv.title, argv.content);
    break;
  case 'remove':
    notes.removeNote(argv.title);
    break;
  case 'read':
    notes.readNote(argv.title);
    break;
  case 'list':
    console.log(notes.getAllNotes());
    break;
  default:
    console.log('Command not recognized...');
}

