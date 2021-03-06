import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";
/*
const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");
*/
//---------------------------JokeByID--------------------------------------

function getJokeById(id) {
  var joke = jokes.getJokeById(id);
  document.getElementById("jokeGoesHere").innerHTML = joke;
}
const jokeButton = document.getElementById("jokeByIdButton");
var id = document.getElementById("jokeId");
jokeButton.onclick = function() {
  getJokeById(id.value);
};

//----------------------------AddJoke--------------------------------------

function addJokes() {
  var jokeText = document.getElementById("jokeText").value;
  jokes.addJoke(jokeText);
  document.getElementById("addedJokeGoesHere").innerHTML = jokeText;
}
const addJokeButton = document.getElementById("addJokeButton");
addJokeButton.onclick = function() {
  addJokes();
};

//----------------------------Quote----------------------------------------

function addQuote() {
  var url = "https://studypoints.info/jokes/api/jokes/period/hour";
  fetch(url)
    .then(res => res.json()) //in flow1, just do it
    .then(data => {
      console.log(data)
      document.getElementById("div1").innerHTML = data;
      /* data now contains the response, converted to JavaScript
                 Observe the output from the log-output above
                 Now, just build your DOM changes using the data*/
    });
}

const quoteIdButton = document.getElementById("quoteId");
quoteIdButton.onclick = function() {
  addQuote;
};
