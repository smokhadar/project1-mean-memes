// pulls off of id tags in index.html.
// var imageBox = document.querySelector(".projectContent").children[0].children[0];
// var imageText = document.querySelector(".projectContent").children[1];
// var recipientName;
// var userMood; 

function selectMood(){
    document.addEventListener("click", function(event){
    var select = document.querySelector("#moods-giphy");
    var selectedindex = event.target;
    var selectedValue = select.getAttribute();
    console.log(selectedValue);
    })
}

selectMood()


// API URLs
var APIKey = "OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5";
var giphyUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=";
console.log("hello");
var giphyUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=cake";
var yeUrl = "https://api.kanye.rest";

// function getApi(){
// Pulls giphy api data.
function giphyApi(){
    fetch(giphyUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

    })

} 

// Pulls kayne quote. 
function yeApi(){
    fetch(yeUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

// add event listeners to submit button, favorites click, most recent click
// grab the user input from form for name
// grab user choice from dropdown

// save generated gif and quote to local storage
// render generated gif and quote to browser
// render on "Most recent tab"

// grab user choice of "favoriting" generated content
// save to local storage
// render in favorites html
