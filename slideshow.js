let arrImages = [
            "./images/cafe1.jpg",
            "./images/cafe2.jpg",
            "./images/cafe3.jpg",
            "./images/cafe4.jpg",
        ];

        // variable to keep track of the current image index
        let currImage = 0;

        // show slide - pass in the index of the imae to show
        function showSlide(index){
            // get a shortcut/nickname to the mg element to the relevenr address from the array 
            let image = document.getElementById("imgSlide");
            // change the image source to the relevent address from the array
            image.src = arrImages[index];
        }

        // Previous button function click event 
        function prevSlide(){
            // when the user clicks the previous button, change currImage to curImage - 1
            currImage--;

            // If the user is at the first image in the array, and they clicked the Previous button, let's show the last image in the array, to give a "loop affect"
            if(currImage < 0){
                // change currImage from -1 to the last image of the array
                currImage = arrImages.length - 1;
            }
            // load the new image
            showSlide(currImage);
        }

        // Next button function click event 
        function nextSlide(){
            // when the user clicks the previous button, change currImage to currImage +1
            currImage++;

            // if currImage has exceeded the number of images in the array, then reset back to the first image for the "loop effect"
            if(currImage >= arrImages.length){
                currImage = 0;
            }
            // Loads the new image
            showSlide(currImage);
        }

