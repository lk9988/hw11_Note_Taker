"user strict";

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

id = new Date().getTime();
console.log(id);

app.get("api/notes", function (req, res) {
	res.json(
		"hello"
		//     //USE the fs module to read the file
		//     //THEN parse the file contents with JSON.parse() to get real data
		//     //Send the parsed data back to the client with res.json();
	);
});

app.post("api/notes", function (req, res) {
	res.json("hello");
	// Access the Posted data in 'req.body'
	// USe the fs modules to read the file
	// Then parse the file contents with JSON.parse() to the real data
	// push the req.body to the array list
	// json.stringfy() the array list back into a json string
	// then save the contents back to the db.json
});

app.delete("api/notes/:id", function (req, res) {
	res.json("hello");
	// acces :id from 'req.params.id'
	// Use the fs modules to read the file
	// Then parse the file contents with JSON.parse() to the real data
	// option a
	//     Find the matching index using array.findIndex()
	//     Remove the targe element using array.splice()
	// option filter
	//     use the array.filter() method to filter our the matching element
	//     myArray = myArray.filter(elemnet => elemnt.id !== req.params.id)
	//     or myarray = myArray.filter(({id}) => id ! == req.params.id)
	// return any time of success message.
});

app.get("/notes", function (req, res) {});

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});

// need to build unique id when note is posted
