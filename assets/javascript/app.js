$(document).ready(function() {

var animals = ["dog", "bunny", "corgi", "cat", "hamster", "horse", "panda", "turtle"];
var image = "";
var animateImage = "";
var finalGif = "";

//makes new buttons 
$("#search").on("click", function(){
	var addButton = $(".animal").val().trim();
	animals.push(addButton);
	renderButtons();	
	
	});


function renderButtons() {
	$(".topButtons").empty();

	for (var i = 0; i < animals.length; i++) {
		var buttons = $("<button>");
		buttons.text(animals[i]);
		buttons.attr("data-name", animals[i]);
		buttons.addClass("btn btn-info")
		$(".topButtons").append(buttons);

		}
	} //end of renderButtons

	renderButtons();

function findAnimalGifs(){	
	$(".gifs").empty();
	var userInput = $(this).attr("data-name");	
	var api = "&api_key=dc6zaTOxFJmzC";
	var queryURL =  "http://api.giphy.com/v1/gifs/search?q=animal+" + userInput + api;
	
    $.ajax({
    	url: queryURL,
    	method: 'GET'}) 
    	.done(function(response) {

    for (i=0; i < 10; i++) {
    	image = response.data[i].images.fixed_height_still.url;
    	animateImage = response.data[i].images.fixed_height.url;
    	var rating = response.data[i].rating; 	
    	finalGif = $("<div class = imageGif> Rating: " + rating.toUpperCase() + "<br><img class=display data-still=" + image + "data-gif='" + animateImage + "' src='" + image + "'></div>")
    	finalGif.prependTo(".gifs")
    	//finalGif.on("click", playGif)
		}   
    	});
	};//end of findAnimalGifs

//attempt to make playable gifs
/*function playGif () {
	var play = $(this).attr("src", animateImage);

	console.log(play)
};
*/
$(document).on("click", "button", ".animal", findAnimalGifs);

/*Bugs:

3. get gifs to play when clicked*/
return false;
//END OF SCRIPT
});