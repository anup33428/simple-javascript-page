function myName() {
	return "Patrick"
}

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
}
console.log("This console log tests the external js");