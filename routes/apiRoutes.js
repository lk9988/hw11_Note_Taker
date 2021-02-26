"use strict";

const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");
const { stringify } = require("querystring");
const { compileFunction } = require("vm");
// module for id
console.log("id", uniqid());

module.exports = function (app) {
	app.get("/api/notes", (req, res) => {
		fs.readFile("./db/db.json", "UTF-8", (err, data) => {
			if (err) throw err;
			// res.status(404);
			let savednote = JSON.parse(data);
			res.json(savednote);
		});
	});

	// app.get("/api/notes", (req, res) => {
	// 	let notes = readNote();
	// 	return res.json(notes);
	// });

	app.post("/api/notes", (req, res) => {
		const newNote = req.body;
		newNote["id"] = uniqid();
		fs.readFile("./db/db.json", "UTF-8", (err, data) => {
			if (err) throw err;
			// res.status(404);
			const noteFromDB = JSON.parse(data);
			noteFromDB.push(newNote);

			const noteString = JSON.stringify(noteFromDB);
			fs.writeFile("./db/db.json", noteString, (err) => {
				if (err) throw err;
				else {
					res.json(noteFromDB);
				}
			});
		});
	});

	// app.post("/api/notes", (req, res) => {
	// 	const newNote = req.body;
	// 	newNote["id"] = uniqid();
	// 	let notes = readNote();
	// 	notes.push(newNote);
	// 	writeNote(notes);
	// 	return res.json(newNote);
	// });

	app.delete("/api/notes/:id", (req, res) => {
		const id = req.params.id;
		fs.readFile("./db/db.json", "UTF-8", (err, data) => {
			if (err) throw err;
			let savednote = JSON.parse(data);
			console.log(savednote, "ssaved 59");
			let newNotesArry = savednote.filter(({ id }) => id != req.params.id);
			// console.log(notes, "57");
			let noteString = JSON.stringify(newNotesArry);
			fs.writeFile("./db/db.json", noteString, (err) => {
				if (err) throw err;
				else return res.json(true);
			});
		});
	});
	// app.delete("/api/notes/:id" , ( req , res ) => {

	//     const id = req.params.id;
	//     readNote();

	// })

	// function readFile(notes) {
	// 	fs.readFileSync("./db/db.json", "UTF-8", (err, notes) => {
	// 		if (err) throw err;

	// 		return JSON.parse(notes);
	// 	});
	// }
	// function writeToFile(notes) {
	// 	try {
	// 		fs.writeFileSync("./db/db.json", "UTF-8", JSON.stringify(notes));
	// 		console.log("writetoFile");
	// 	} catch (err) {
	// 		return res.status(404).send("cannot write");
	// 	}
	// 	return;
	// }

	// function readNote() {
	// 	fs.readFile("./db/db.json", "UTF-8", (err, data) => {
	// 		if (err) throw error;
	// 		let notes = JSON.parse(data);
	// 		res.json(notes);
	// 	});
	// }
	// function writeNote() {
	// 	fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
	// 		if (err) res.status(404);
	// 		else {
	// 			res.json(notes);
	// 		}
	// 	});
	// }
};
