// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
            displayThankYouMessage(); // Show the "Thank you" message
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?';
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by *2
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.width = 250;
    catImage.height = 250;
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif and thank you message
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; // Clear previous content
    var imageContainer = document.getElementById('image-container');

    // Create the cat-heart image
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.width = 150;
    catHeartImage.height = 150;

    // Create the "Thanks for Accepting" message
    var thankYouMessage = document.createElement('div');
    thankYouMessage.id = 'thank-you-message';
    thankYouMessage.innerText = 'Thanks for Accepting! 💖';

    // Apply styling to the message
    thankYouMessage.style.fontSize = '20px';
    thankYouMessage.style.fontWeight = 'bold';
    thankYouMessage.style.color = '#ff1493'; // Pink color
    thankYouMessage.style.textAlign = 'center';
    thankYouMessage.style.marginTop = '10px';

    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage); // Add the heart cat image
        imageContainer.appendChild(thankYouMessage); // Add the message below
        document.getElementById('options').style.display = 'none'; // Hide options
    };
}


// Display the cat.gif initially
displayCat();
