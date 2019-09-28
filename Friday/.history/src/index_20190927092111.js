import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

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

//----------------------------