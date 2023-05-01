function getParams() {
    // get search params out of html search results page URL and convert into array
    var searchParamsArr = document.location.search.split('&');
    var query = searchParamsArr[0].split('=').pop();
    searchGifApi(query);
}

var yeGif = document.querySelector("#gifAndQuote").children[Image]

function searchGifApi(query) {
    var gifQueryUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=kanye&q=kanye-west"

    gifQueryUrl = gifQueryUrl + '&q=' + query;

    fetch(gifQueryUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }

            return response.json();
        })
        .then(function (gifs) {
            // write query to page so user sees
            // yeGif.textContent = gifs.search.query;
            
            console.log(gifs);
            var gifDatabase;

            if (!gifs.results.length) {
                console.log('No results found!');
            } else {
                // make image src empty
                // yeGif.textContent = '';
                for (var i = 0; i < gifs.results.length; i++) {
                    printResults(gifs.results[i]);
                }
                // yeGif.textContent = gifs.[''];
                gifDatabase = JSON.parse(localStorage.getItem("gif")) || [];
                // gifDatabase.push({text: data.quote});
                localStorage.setItem("gif", JSON.stringify(gifDatabase));
                console.log(gifDatabase);
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
var searchFormEl = document.querySelector("search-form");

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