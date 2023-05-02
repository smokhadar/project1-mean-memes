// get query from page URL
function getParams() {
    var searchParamsArr = document.location.search.split('&');
    var query = searchParamsArr[0].split('=').pop();
    console.log("query", query);
    searchGifApi(query);
}

// create and display gif element on page
var resultGifEl = document.querySelector('#result-content');
function printResults(resultObj) {
    console.log(resultObj);
  
    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
  
    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);
  
    var gifEl = document.createElement('img');
    gifEl.classList.add('generatedGif');
    gifEl.setAttribute('src', resultObj.images.downsized.url);
    console.log( "url", resultObj.images.downsized.url);
  
    resultBody.append(gifEl);
    resultGifEl.append(resultCard);
  }

//   search gif API
function searchGifApi(query) {
    var gifQueryUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=kanye,"

    gifQueryUrl = gifQueryUrl + query;
    console.log("gifQueryUrl", gifQueryUrl);

    fetch(gifQueryUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (gifs) {
            var resultText = document.querySelector("#result-text");
            resultText.textContent = query;
            console.log(gifs);

            var gifDatabase;
            if (!gifs) {
                console.log('No results found!');
            } else {
                // for (var i = 0; i < gifs.count; i++) {
                //     printResults(gifs[i]);
                console.log(gifs.data.length);
                var randomNumber = Math.floor(Math.random()*gifs.data.length);
                console.log(randomNumber);
                var gif = gifs.data[randomNumber];
                printResults(gif);

                gifDatabase = JSON.parse(localStorage.getItem("gif")) || [];
                gifDatabase.push({gif: gif.url});
                localStorage.setItem("gif", JSON.stringify(gifDatabase));
                console.log("gifDatabase", gifDatabase);
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

var yeQuote = document.querySelector("#gifAndQuote").children[1];
var yeUrl = "https://api.kanye.rest";
var textdatabase

// kanye quote API
function yeQuoteApi(){
   fetch(yeUrl)
   .then(function(response){
       return response.json();
   })
   .then(function(data){
       yeQuote.textContent = '"' + data.quote + '."';
       textdatabase = JSON.parse(localStorage.getItem("text")) || [];
       textdatabase.push({text: data.quote});
       localStorage.setItem("text", JSON.stringify(textdatabase));
       console.log(textdatabase);
   })

}

yeQuoteApi();

// handle search form
var searchFormEl = document.querySelector("#search-form");

function handleSearchSubmit(event) {
    event.preventDefault();
    var searchInputVal = document.querySelector ('#search-input').value;

    if (!searchInputVal) {
        console.error('You need a search input value!');
        console.log(console.error);
        return;
    }
    var queryString = './search-results.html?q=' + searchInputVal;
    location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchSubmit);

getParams();

// add quote and gif to favorites
function handleAddToFavorites(quote, gif) {
    var quote = document.querySelector("#generatedQuote")
    localStorage.setItem("favQuotes", quote);
    var gif = document.querySelector(".generatedGif")
    localStorage.setItem("favGifs", gif);
};

var addFavBtn = document.querySelector("#addFav")

addFavBtn.addEventListener('click', handleAddToFavorites);