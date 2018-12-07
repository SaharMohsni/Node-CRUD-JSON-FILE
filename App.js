const fs = require('fs')
const argv = require('yargs').argv
const note = require ('./note-module')



switch (argv._[0]) {
case "add" : note.addNote(argv.title,argv.body)
break;
case "list" : note.list()
break;
case "remove" : note.removeNote(argv.title)
break;
case "update": note.updateNote( argv.search, argv.title, argv.body)
default : console.log("options ")
console.log("-- ")
}

