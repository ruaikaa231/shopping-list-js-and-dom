var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var done = document.querySelectorAll("li");
var num = 0;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.className = "item" + num++;
	var del = document.createElement("button");
	del.value = false;
	del.textContent = "Delete";
	li.value = false;
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(del)
	ul.appendChild(li);
	input.value = "";


	del.addEventListener("click", function() {
		del.value = true;
		ul.removeChild(li);
	})

	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyClick(event) {
	if (inputLength() && event.key === "Enter") {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeyClick);
