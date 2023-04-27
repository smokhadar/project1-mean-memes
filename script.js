var APIKey = "OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5";
var giphyUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=" + userInput;
console.log("hello");

function getApi(){
    fetch(giphyUrl)
    .then(function(response){
        return response;
    })
    .then(function(data){
        console.log(data);

    })

} 

getApi()

// PULL request :)