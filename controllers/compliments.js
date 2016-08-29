// Compliment list \\
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

module.exports = {
  index: function( req, res){
    var randomIndex = Math.floor(Math.random() * compliments.length);
    var comp = compliments[randomIndex];
    res.render('index',{
      compliment: comp
    });
  }
};



