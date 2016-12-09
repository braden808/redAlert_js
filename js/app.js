console.log("Sanity check");

function hello (){
	console.log("hello");
	var changeDiv = document.getElementById("divElement")
	changeDiv.innerHTML = "Wat";
	console.log(changeDiv);
}

function soFast (){
	var classElement = document.getElementsByClassName("firstPeriod")
	classElement.innerHTML = "Wat";
	console.log(classElement);
	classElements[2].innerHTML = "wat";
}