var emotions = ["happy", "sad", "love", "tired", "weary", "joyful", "exhausted", "bitter", "angry", "surprise", "fear", "anticipation"];

function renderButtons() {
    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
    // Looping through the array of movies
    for (var i = 0; i < emotions.length; i++) {
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("emotions");
        // Adding a data-attribute
        a.attr("data-name", emotions[i]);
        // Providing the initial button text
        a.text(emotions[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}
renderButtons();
