
function handleQuizSubmit(event){
	event.preventDefault();
	if(document.getElementById("ans1").value.toLowerCase() == "antarctica"){
		document.getElementById("q1").classList.add("correct");
		document.getElementById("q1").classList.remove("incorrect");
		document.getElementById("hidden-ans-1").classList.add("hidden");
	}
	else{
		document.getElementById("q1").classList.add("incorrect");
		document.getElementById("q1").classList.remove("correct");
		document.getElementById("hidden-ans-1").classList.remove("hidden");
	}
	if(document.getElementById("ans2").checked){
		document.getElementById("q2").classList.add("correct");
		document.getElementById("q2").classList.remove("incorrect");
	}
	else{
		document.getElementById("q2").classList.add("incorrect");
		document.getElementById("q2").classList.remove("correct");
		document.getElementById("correct-answer-2").classList.add("correct");
	}
	if(document.getElementById("ans3").checked){
		document.getElementById("q3").classList.add("correct");
		document.getElementById("q3").classList.remove("incorrect");
	}
	else{
		document.getElementById("q3").classList.add("incorrect");
		document.getElementById("q3").classList.remove("correct");
		document.getElementById("correct-answer-3").classList.add("correct");
	}
	if(document.getElementById("ans4").value == 166){
		document.getElementById("q4").classList.add("correct");
		document.getElementById("q4").classList.remove("incorrect");
		document.getElementById("hidden-ans-4").classList.add("hidden");
	}
	else{
		document.getElementById("q4").classList.add("incorrect");
		document.getElementById("q4").classList.remove("correct");
		document.getElementById("hidden-ans-4").classList.remove("hidden");
	}
	if(document.getElementById("ans5").checked){
		document.getElementById("q5").classList.add("correct");
		document.getElementById("q5").classList.remove("incorrect");
	}
	else{
		document.getElementById("q5").classList.add("incorrect");
		document.getElementById("q5").classList.remove("correct");
		document.getElementById("correct-answer-5").classList.add("correct");
	}
}

function addListener(){
	document.getElementById("submitter").addEventListener("mouseover", function(){document.getElementById("submitter").classList.toggle("submit-button-hover")});
	document.getElementById("submitter").addEventListener("mouseleave", function(){document.getElementById("submitter").classList.toggle("submit-button-hover")});
}