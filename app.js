
// Structure a series of possible responses 
// depending on the url requested in the browser

// 

const express = require("express");
const app = express();
const handlebars = require("handlebars").create({defaultLayout:"main"});

// app.engine("handlebars", handlebars);

app.set("view engine", "handlebars")

app.get("/", function(req, res){
	res.render("home");
});

app.set("port", process.env.PORT || 3001)

app.use(express.static(__dirname + "/views/layouts"));

app.listen(app.get("port"), function(){
	console.log("Listening on port " + app.get("port"))
});