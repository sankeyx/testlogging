const express = require("express");

const app = express();
const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.get("/err1", (req, res) => {
	throw "This is an error message";
});

app.get("/err2", (req, res) => {
	res.status(400).json({
		success: 0,
		message: "Server responded with error"
	});
});

app.get("/err3", (req, res) => {
	res.status(500).send({
		success: 0,
		message: "Internal Error"
	});
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
