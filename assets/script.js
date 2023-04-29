// elements to render generated content in


//need and image tag
// var imageBox = document.querySelector("#projectContent").children[0].children[0];
var imageText = document.querySelector("#projectContent").children[0];


var recipientName = document.getElementById('recipientName');
var userMood = document.getElementById('moods-giphy');


var moodIndex = userMood.selectedIndex;
var moodOptions = userMood.options;
console.log(moodOptions[1].value);
console.log(moodIndex);
for (moodIndex; moodIndex < 4; moodIndex++) {
    [moodIndex]
}


// var selectedMood = userMood.options[moodIndex];
alert("Index: " + moodIndex + " is " + moodOptions[moodIndex].value);


// console.log("moodIndex", moodIndex);
// console.log("moodIndex", moodOptions.value);




// event listener for saveBtn
var saveBtn = document.querySelector('#projectContent').children[2];
saveBtn.addEventListener('click', function(event) {
    var userMood =
    console.log(userMood);
    giphyApi();
    yeApi();
});


// API URLs
var APIKey = "OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5";
var giphyUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=cheeseburger";
var giphyUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=cake";
var yeUrl = "https://api.kanye.rest";




var lastSavedGif;
var lastSavedQuote;


// function getApi(){
// Pulls giphy api data.
function giphyApi(){
    fetch(giphyUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
       




        lastSavedGif = JSON.parse(localStorage.getItem("lastSavedGif")) || [];
        lastSavedGif.push({})
    })


}


// Pulls kayne quote.
var textdatabase


function yeApi(){
    fetch(yeUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        imageText.textContent = data.quote;
        textdatabase = JSON.parse(localStorage.getItem("text")) || [];
        textdatabase.push({text: data.quote});
        localStorage.setItem("text", JSON.stringify(textdatabase));
        //console.log(textdatabase);
    })
}




// add event listeners to submit button, favorites click, most recent click
// grab the user input from form for name


// save generated gif and quote to local storage
// render generated gif and quote to browser
// render on "Most recent tab"


// grab user choice of "favoriting" generated content
// save to local storage
// render in favorites html
