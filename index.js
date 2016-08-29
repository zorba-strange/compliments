// Require \\
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var compliment = require("./controllers/compliments.js");

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
var randomIndex = Math.floor(Math.random() * compliments.length);
var randomColor = Math.floor(Math.random() * colors.length);
var color;
// Use \\
app.set("view engine", "hbs");

// Set \\
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Port \\
app.listen(4000, function(){
  console.log("app listening on port 4000");
});

// Routes \\
app.get("/", function( req, res){
  res.render("welcome");
});

app.post("/", function( req, res ){
  res.render("index", {
    player_name: req.body.player_name,
    compliment: compliments[randomIndex],
    color: colors[randomColor]
  });
});

