$(document).ready(function(){
+
	//TAB FUNCTIONALITY
    jQuery(document).ready(function() {
		jQuery('.tabs .tab-links a').on('click', function(e)  {
			var currentAttrValue = jQuery(this).attr('href');
	 
			// Show/Hide Tabs
			jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
			
			// Change/remove current tab to active
			jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
	 
			e.preventDefault();
		});
	}); //End of tab functionality

	//GUEST LOGIN BUTTON
	$("#loginGuestButton").click(function() {
		var displayName = document.getElementById("loginGuestName").value;
		var email = displayName + "_guest" + "@email.com";
		var password = "guest";

		if(displayName == null || displayName == "") {
			window.alert("Please fill in any missing fields.");
		} else {
		//console.log("Display Name: " + displayName + ", Email: " + email + ", Password: " + password);
		//READY TO REDIRECT TO MAIN.HTML----------------------------------------------------------------

		}
	}); //End of guest login button

	//STUDENT LOGIN BUTTON
	$("#loginStudentButton").click(function() {
		var email = document.getElementById("loginStudentEmail").value;
		var displayName = email.replace("@purdue.edu", "");
		var password = document.getElementById("loginStudentPassword").value;
		
		if(email == null || email == "" || password == null || password == "") {
			window.alert("Please fill in any missing fields.");
		} else {
			//console.log("Display Name: " + displayName + ", Email: " + email + ", Password: " + password);
			if(email.indexOf("@purdue.edu") == -1) {
				window.alert("Please enter a purdue domain email that is already registered.");
				document.getElementById("loginStudentEmail").value = "";
				document.getElementById("loginStudentPassword").value = "";
			} else {
				//CHECK IF CREDENTIALS EXIST IN THE DB, IF SO THEN REDIRECT TO MAIN.HTML-------------------

			}
		}
	}); //End of student login button

	//REGISTER STUDENT BUTTON
	$("#registerStudentButton").click(function() {
		var email = document.getElementById("registerStudentEmail").value;
		var displayName = email.replace("@purdue.edu", "");
		var password = document.getElementById("registerStudentPassword").value;
		
		if(email == null || email == "" || password == null || password == "") {
			window.alert("Please fill in any missing fields.");
		} else {
			//console.log("Display Name: " + displayName + ", Email: " + email + ", Password: " + password);
			if(email.indexOf("@purdue.edu") == -1) {
				window.alert("Please enter a purdue domain email to register.");
				document.getElementById("registerStudentEmail").value = "";
				document.getElementById("registerStudentPassword").value = "";
			} else {
				//CHECK IF CREDENTIALS EXIST IN THE DB, IF NOT THEN REDIRECT TO MAIN.HTML-------------------

			}
		}
	}); //End of register student button
}); //End of document.ready
