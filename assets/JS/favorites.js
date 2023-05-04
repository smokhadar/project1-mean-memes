// will load in all of the favorites and add them to page
function loadFavorites(){
    var favoriteQuotes = JSON.parse(localStorage.getItem("faveQuotes")) || "\0";
    var favoriteGifs = JSON.parse(localStorage.getItem("faveGifs")) || "\0";

    if (!favoriteQuotes || !favoriteGifs) {
        return sadKanye;
    }

    var favoritesTable = document.createElement("div");
    favoritesTable.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
    
    for (var i = 0; i < favoriteQuotes.length; i++) {
        var favoritesBody = document.createElement("div");
        favoritesBody.classList.add('card-body');
        favoritesBody.textContent = favoriteQuotes[i];
        favoritesTable.appendChild(favoritesBody);

        console.log(favoriteQuotes[i]);
        console.log(favoriteGifs[i]);

        var favoritesGif = document.createElement("img");
        favoritesGif.setAttribute('src', favoriteGifs[i].images);
        favoritesGif.setAttribute('height', "100px");
        favoritesGif.setAttribute('width', "100px");
        favoritesTable.append(favoriteGifs);
    }
    document.body.append(favoritesTable);
}

// Load favorites will call this function if the user does not have any favorites.
function sadKanye() {
    var noData = documet.createElement("div");
    noData.textContent = "You have no favorites. :(";
    document.body.append(noData);
}

// to reset local storage
// localStorage.clear();

// imports function 
import  printResults from './display-search.js';

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