console.log('Starting app.js');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes= require('./notes.js');

const v = yargs.argv;
const command = argsv._[0];
console.log(`Command: ${command}`);

switch(command) {
  case 'add':
    notes.addNote(argsv.title, argsv.content);
    break;
  case 'remove':
    notes.removeNote(argsv.title);
    break;
  case 'read':
    notes.readNote(argsv.title);
    break;
  case 'list':
    notes.getAllNotes();
    break;
  default:
    console.log('Command not recognized...');
}

