const form  = document.querySelector("form");
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var check = document.forms['form']['checkbox'];



var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var check_error = document.getElementById('check_error');




form.onsubmit = (e) =>{
	e.preventDefault();
	if(email.value == ""){
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	else{
		email_error.style.display = "none";
	}
	if(password.value == ""){
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
	else{
		pass_error.style.display = "none";
	}
	if (email.value.length < 9) {
			email.style.border = "1px solid red";
			email_error.style.display = "block";
			email.focus();
			return false;
		}
		if (password.value.length < 6)  {
			pass_error.style.display = "block";
			password.focus();
			return false;
		}
		if (!check.checked)  {
			check_error.style.display = "inline";
			return false;
		}
}

    //create function of check/uncheck box
    document.getElementById("exampleModal").addEventListener("reset", RemoveModal);

    function RemoveModal() {
      document.getElementsById("removemd").value = false;
    }



