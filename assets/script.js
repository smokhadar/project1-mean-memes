// elements to render generated content in
var imageBox = document.querySelector("#projectContent").children[0].children[0];
var imageText = document.querySelector("#projectContent").children[1];

// variables for user input
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
var saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', function(event) {
    var userMood = 
    console.log(userMood);
    giphyApi();
    yeApi();
});


// API URLs
var APIKey = "OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5";
var giphyUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=" + userMood;
console.log("hello");
var giphyUrl = "http://api.giphy.com/v1/gifs/search?api_key=OfyI3KoCiM3YTdXVxfbOmwVxvhX0NUt5&q=cake";
var yeUrl = "https://api.kanye.rest";


var lastSavedGif;
var lastSavedQuote;

// function getApi(){
// Pulls giphy api data.
function giphyApi(giphyUrl){
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
function yeApi(yeUrl){
    fetch(yeUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

// add event listeners to submit button, favorites click, most recent click
// grab the user input from form for name
// grab user choice from dropdown

// save generated gif and quote to local storage
// render generated gif and quote to browser
// render on "Most recent tab"

// grab user choice of "favoriting" generated content
// save to local storage
// render in favorites html
