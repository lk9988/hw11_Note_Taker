"use strict";

const express = require("express");
// const path = require("path");
// const fs = require("fs");
// will move this to apiRoute.js

// const uniqid = require("uniqid");
// // module for id

const app = express();
const PORT = process.env.PORT || 7777;

const { json } = require("express");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});
