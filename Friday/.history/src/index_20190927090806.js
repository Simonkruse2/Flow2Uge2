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



function addJokes(joke) {
  var joke = jokes.addJoke(joke);
  document.getElementById("addedJokeGoesHere").innerHTML = joke;
}
const addJokeButton = document.getElementById("addJokeButton");
var joke = document.getElementById("jokeText").value;
addJokeButton.onclick = function(){
  addJokes(joke);
}