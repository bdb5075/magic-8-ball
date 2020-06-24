$(document).ready(function() {
var magic8Ball = {};
magic8Ball.answers = ["Yes", "No", "Maybe", "The future is unclear", "Certainly", "Don't count on it", "Ask again later"];
$("#answer").hide();

magic8Ball.askQuestion = function(question)
{
	$("#8ball").effect("shake");
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * magic8Ball.answers.length;
	var randomIndex = Math.floor(randomNumberArray);
	var randomAnswer = magic8Ball.answers[randomIndex];
	$("#answer").text(randomAnswer);
};

var clickButton = function()
{
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(function(){
	var question = prompt("Ask a yes/no question.")
		magic8Ball.askQuestion(question)
	}, 500);
};
$("#questionButton").click(clickButton);
});
