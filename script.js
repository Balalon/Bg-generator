// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
// 	console.log("CLICK!!!!");
// })

var button = document.getElementById("Enter");
var input = document.getElementById("userinput"); //document.getElementById
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

}

function AddlistAfterclick(){

	//console.log("click is working");
	if (inputLength() > 0){
		createListElement();
	}

}

function AddlistAfterkeypress(event) {

	if (inputLength() > 0 && event.which === 13){
		createListElement();
	}

}

button.addEventListener("click", AddlistAfterclick);
input.addEventListener("keypress", AddlistAfterkeypress);