// This is one way of commenting in JavaScript

/* Here is another comment that can take
			more
		than
	one
line 
	but
		remember 
			to
				close it! */

function validateForm() {
	var firstname = document.forms["myForm"]["firstname"].value;
	var lastname = document.forms["myForm"]["lastname"].value;
	if ((firstname == "") || (lastname == "")) {
		alert("Both fields must be filled out");
		return false;
	}
	else {
		alert("Success! You entered '" + firstname + " " + lastname + "'");
		return true;
	}
}

function changeToRed() {
	document.getElementById("changeRed").style.color = '#ff3232';
	console.log("Console log statement to show that 'changeToRed' function is called");
}

console.log("This console log tests the external js");

function showImage() {
	var elements = document.getElementsByTagName("img");
	var index;
	for (index = 0; index < elements.length; index++) {
		elements[index].style.display = 'inline-block';
	}
}