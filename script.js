var APIKey = "OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5";
var giphyUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=cake";

var yeUrl = "https://api.kanye.rest";

function giphyApi(){
    fetch(giphyUrl)
    .then(function(response){
        return response;
    })
    .then(function(data){
        console.log(data);
    })

} 

function yeApi(){
    fetch(yeUrl)
    .then(function(response){
        // console.log(response); 
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}


//giphyApi()
yeApi()

// PULL request :)