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

var favsButton = document.querySelector("#favBtn")

function goToFavorites() {
    var favoritesString = "./favorites.html"
    location.assign(favoritesString);
}

favsButton.addEventListener('click', goToFavorites);

