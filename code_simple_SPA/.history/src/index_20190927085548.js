import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");



function getJokeById(id) {
  var joke = jokes.getJokeById(id + 1);
  document.getElementById("jokeGoesHere").innerHTML = joke;
}
const jokeButton = document.getElementById("jokeByIdButton");

var id = document.getElementById("jokeId");

jokeButton.onclick = function() {
  getJokeById(id.value);
};
