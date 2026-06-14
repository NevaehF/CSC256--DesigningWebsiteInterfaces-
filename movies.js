 
 // create an empty array to hold the list of movies
        let arrMovies = [];

        // This function will take input from the user and add it to the div 
        function addMovie(){
            // this is the shortcut/nickname for the text input
            let txtMovie = document.getElementById("txtMovie");
            // get the movie name, removing any leading or trailing spaces
            let movieName = txtMovie.value.trim();

            // check to see if the name is empty
            if(movieName != " "){
                // since the user entered in something, add it to the end of the array using .push()
                arrMovies.push(movieName);
                // Clear out the text box so that the user can easily add another movie 
                txtMovie.value = ""; 
                // I want to show the movies now 
                showMovies();
            }
        }

        // function to show the movies in the array in the div 
        function showMovies(){
            // shortcut nickname for the movies div
            let divMovies = document.getElementById("divMovies");
            // Sort the list of movies here to make sure we are always showing a sorted list
            arrMovies.sort();
            // convert the array of movies into a string using join, they will be seperated by an HTML line break - <br>
           divMovies.innerHTML = arrMovies.join("<BR>");
        }

        // function to erase the movies and updates the div witht he empty movie list
        function resetMovieList(){
            // reset the array by setting it equal to [] empty brackets
            arrMovies = [];

            // reload the movie div 
            showMovies();
        }