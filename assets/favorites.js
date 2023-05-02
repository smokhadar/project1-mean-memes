// imports function 
import { printResults } from '/display-search.js';

// will load in all of the favorites and add them to page
function loadFavorites(){
    var favoriteQuotes = JSON.parse(localStorage.getItem("favQuotes"));
    var favoriteGifs = JSON.parse(localStorage.getItem("favGifs"));

    var favoritesTable = document.createElement("div");
    favoriteTable.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    for (var i = 0; i < favoriteQuotes.length; i++) {
        var favoritesBody = document.createElement('div');
        resultBody.classList.add('card-body');
        favoritesBody.textContent = favoriteQuotes[i];
        favoritesTable.append(resultBody);

        printResults(favoriteGifs[i]);
    }
}

loadFavorites()