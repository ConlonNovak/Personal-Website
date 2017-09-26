function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html("");
}

function validate(){
	var d = new Date($("#dob").val())
	var today = new Date()
	var p = Number($("#phone").val())
	if (isNaN(p) || p < 1000000000 || p > 9999999999) {
		alert("Phone Number is not valid or not in a valid format.")
	} 
	if (d >= today){
		alert("Date of Birth is not valid or not in a valid format.")
	}
}