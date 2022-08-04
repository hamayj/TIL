
function introduce (lastName, firstName, callback) {
	var fullName = lastName + firstName;
	callback(fullName);
}

introduce("홍", "길동", function(name) {
		console.log(name);
	}); 