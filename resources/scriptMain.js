$(document).ready(function(){
    $("#agricultureButton").click(function() {
        window.location.href = "agriculture.html";	
    });

    $("#educationButton").click(function() {
        window.location.href = "education.html";	
    });

    $("#engineeringButton").click(function() {
        window.location.href = "engineering.html";	
    });

    $("#exploratoryButton").click(function() {
        window.location.href = "exploratory.html";	
    });

    $("#healthButton").click(function() {
        window.location.href = "healthAndHuman.html";	
    });

    $("#liberalButton").click(function() {
        window.location.href = "liberalArts.html";	
    });

    $("#managementButton").click(function() {
        window.location.href = "management.html";	
    });

    $("#pharmacyButton").click(function() {
        window.location.href = "pharmacy.html";	
    });

    $("#polytechnicButton").click(function() {
        window.location.href = "polytechnic.html";	
    });

    $("#scienceButton").click(function() {
        window.location.href = "science.html";	
    });

    $("#veterinaryButton").click(function() {
        window.location.href = "veterinaryMedicine.html";	
    });

    $("#logoutButton").click(function() {
        localStorage.clear();
        window.location.href = "index.html";
    })

});
    