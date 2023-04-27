// pulls off of id tags in index.html.
var imageBox = document.querySelector("");
var imageText = document.querySelector("");

// API URLs
var APIKey = "OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5";
var giphyUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=cake";
var yeUrl = "https://api.kanye.rest";

// Pulls giphy api data.
function giphyApi(){
    fetch(giphyUrl)
    .then(function(response){
        return response;
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

//giphyApi()
//yeApi()

// dcasdfvasdfvasd