 
 // we will use this function to organize the code for adding our info to the HTML 
        function loadInfo(){
            // This allows us to change the content of out HTML element - textContent is the best option to use from a performance
            // ^ perspective
            document.getElementById("divMajor").textContent = "Major: Advancing Computer Science (ACS)";
            // set the email
            document.getElementById("divEmail").textContent = "Email: nevferna@uat.edu";
            // set the expected graduate date
            document.getElementById("divGradDate").textContent = "Expected Graduate Date: December 2026";   
        }

    