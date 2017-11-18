// Function for getting the Answers 
function getAnswers() {
	var total = 5;
	var score = 0;

	//Getting the User Input
	var q1 = document.forms['jsQuiz']['q1'].value;
	var q2 = document.forms['jsQuiz']['q2'].value;
	var q3 = document.forms['jsQuiz']['q3'].value;
	var q4 = document.forms['jsQuiz']['q4'].value;
	var q5 = document.forms['jsQuiz']['q5'].value;

	//Form Validation
	for(i=1; i<=total; i++) {
		if(eval('q'+i) == '' || eval('q'+i) == null) {
			alert("Please select option for question no:"+i);
			return false;
		}
	}

	//Setting Correct Answers
	var answers = ["b","a","d","b","d"];

	for(i=1;i<=total;i++) {
		if(eval('q'+i) == answers[i-1]) {
			score++;
		}
	}

	//Displaying Result
	var results = document.getElementById("results");
	results.innerHTML="<h3>You Scored <span>' + score + '</span>Out of <span>'+ total'</span> </h3>";
	alert('You scored '+score+' out of '+total);

	return false;
}