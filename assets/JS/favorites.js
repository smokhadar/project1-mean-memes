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
        favoritesBody.textContent = favoriteQuotes[i].faveQuote;
        favoritesTable.appendChild(favoritesBody);

        console.log(favoriteQuotes[i]);
        console.log(favoriteGifs[i]);
        console.log(favoriteGifs[i].faveGifs);

        var favoritesGif = document.createElement("img");
        favoritesGif.setAttribute('src', favoriteGifs[i].faveGifs);
        favoritesGif.setAttribute('height', "100px");
        favoritesGif.setAttribute('width', "100px");
        favoritesTable.append(favoritesGif);
    }
    document.body.append(favoritesTable);
    
}

// Load favorites will call this function if the user does not have any favorites.
function sadKanye() {
    var noData = document.createElement("div");
    noData.textContent = "You have no favorites. :(";
    document.body.append(noData);
}

// to reset local storage
// localStorage.clear();

loadFavorites()