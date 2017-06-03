< !DOCTYPE html >
    < html lang = "en" >

    < head >
    < meta charset = "utf-8" >
    < title > Gif Emotions < /title> < style type = "text/css" >
    button,
    div,
    form,
    input {
        margin: 10 px;
    } < /style> < /head>

< body >
    < div class = "container" >
    < h1 > Emotional Gif 's!</h1>
    <!-- Rendered buttons will get dumped Here  -->
    < div id = "buttons-view" > < /div> < form id = "movie-form" >
    < label
for = "movie-input" > Add an Emotion < /label> < input type = "text"
id = "movie-input" >
    < br >
    <!-- Button triggers new movie to be added -->
    < input id = "add-movie"
type = "submit"
value = "Add Emtions" >
    < /form>
    <!-- Movies will get dumped dere -->
    < div id = "movies-view" > < /div> < script src = "http://code.jquery.com/jquery-2.1.3.min.js" > < /script> < script type = "text/javascript" >
    // Initial array of movies
    var emotions = ["happy", "sad", "love", "tired", "weary", "joyful", "exhausted", "bitter", "angry", "surprise", "fear", "anticipation"];
// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {
    var emotions = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotions + "&api_key=dc6zaTOxFJmzC&limit=10&rating=";
    // Creating an AJAX call for the specific movie button being clicked

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // console.log(queryULR);
        console.log(response);
        console.log(queryURL);

        // Creating a div to hold the movie
        var movieDiv = $("<div class='movie'>");
        // Storing the rating data
        var rating = response.data.rating;
        // Creating an element to have the rating displayed
        var pOne = $("<p>").text("Rating: " + rating);
        // Displaying the rating
        movieDiv.append(pOne);
        // // Storing the release year
        // var released = response.Released;
        // // Creating an element to hold the release year
        // var pTwo = $("<p>").text("Released: " + released);
        // // Displaying the release year
        // movieDiv.append(pTwo);
        // // Storing the plot
        // var plot = response.Plot;
        // // Creating an element to hold the plot
        // var pThree = $("<p>").text("Plot: " + plot);
        // // Appending the plot
        // movieDiv.append(pThree);
        // Retrieving the URL for the image
        var imgURL = response.data.images;
        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);
        // Appending the image
        movieDiv.append(image);
        // Putting the entire movie above the previous movies
        $("#movies-view").prepend(movieDiv);
    });

}
// Function for displaying movie data
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
        a.addClass("movie");
        // Adding a data-attribute
        a.attr("data-name", emotions[i]);
        // Providing the initial button text
        a.text(emotions[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}
// This function handles events where a movie button is clicked
$("#add-movie").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var movie = $("#movie-input").val().trim();
    // Adding movie from the textbox to our array
    emotions.push(movie);
    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});
// Adding a click event listener to all elements with a class of "movie"
$(document).on("click", ".movie", displayMovieInfo);
// Calling the renderButtons function to display the intial buttons
renderButtons(); < /script> < /div> < /body>

< /html>
