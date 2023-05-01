// get search params out of html search results page URL
function getParams() {
    var searchParamsArr = document.location.search.split('&');
    var query = searchParamsArr[0].split('=').pop();
    console.log("query", query);
    searchGifApi(query);
}

var resultGifEl = document.querySelector('#result-content');

// displays gifs on page
function printResults(resultObj) {
    console.log(resultObj);
  
    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
  
    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);
  
    var gifEl = document.createElement('img');
    gifEl.src = resultObj.url;
  
    resultBody.append(gifEl);
    resultGifEl.append(resultCard);
  }

function searchGifApi(query) {
    var gifQueryUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=kanye&q=kanye-west"

    gifQueryUrl = gifQueryUrl + '&q=' + query;
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
                for (var i = 0; i < gifs.count; i++) {
                    printResults(gifs[i]);
                }
                gifDatabase = JSON.parse(localStorage.getItem("gif")) || [];
                gifDatabase.push({gif: gifs[i].url});
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

function yeQuoteApi(){
   fetch(yeUrl)
   .then(function(response){
       return response.json();
   })
   .then(function(data){
       yeQuote.textContent = data.quote;
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

// function handleAddToFavorites()