const fs = require('fs')
const addNote =  (title,body) =>{
	const newNote = {
		title,
		body,
	}
	let notes

	try{
		const file = fs.readFileSync("note.json")
		notes = JSON.parse(file.toString())

	}catch(err){
		// if the file json is empty 
		notes = []
	}
	try{
		notes.push(newNote)
		json = JSON.stringify(notes)
		fs.writeFileSync("note.json",json)
	}
	catch(err){

console.log(err)
	}
}
const removeNote =  (title) =>{

	let notes
	const newNote = {
		title,
		body,
	}
	try{
		const file = fs.readFileSync("note.json")
		notes = JSON.parse(file.toString())

	}catch(err){
		// if the file json is empty 
		notes = []
	}


	try{
		
		let newNotes = notes.filter(el => el.title !== title)
		json = JSON.stringify(newNotes)
		fs.writeFileSync("note.json",json)
	}
	catch(err){
		console.log(err)
	}
}


const list =  () =>{
  let notes
  
  try{
    	const file = fs.readFileSync("note.json")
		notes = JSON.parse(file.toString())
        console.log("Printing :  "+notes.length+" note(s)")
        for(let i=0;i<notes.length;i++)
        {
          console.log("Title  : "+notes[i].title)
          console.log("Body  : "+notes[i].body)
          console.log("-----------------------")

        }

	}catch(err){
		// if the file json is empty 
		notes = []
	}
}
const updateNote = (search,title,body) =>{
	try{
		const file = fs.readFileSync("note.json")
		notes = JSON.parse(file.toString())


	}catch(err){
		// if the file json is empty 
		notes = []
	}
	try{
		console.log(notes)
		console.log(title)
		console.log(body)
		console.log(search)
		let newNotes = notes.map(el => {
			if (el.title === search){
				console.log(el)
				return (
					el = {title,
					body}
				)
				}
			else 
			return el
		}	
		)
		console.log(newNotes)
		json = JSON.stringify(newNotes)
		fs.writeFileSync("note.json",json)

}
	catch(err){
		console.log(err)
	}
}

module.exports ={addNote,removeNote,list,updateNote}