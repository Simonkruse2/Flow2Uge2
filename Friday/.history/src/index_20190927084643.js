import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

const jokeButton = document.getElementById("jokeByIdButton");
jokeButton.onclick = function() {
  getJokeById;
};
function getJokeById(id) {
  var id = jokes.getJokeById(document.getElementById("jokeid").value);
  document.getElementById;
}

document.getElementById("jokeByIdButton").addEventListener("click", function() {
  var joke = jokes.getJokeById(document.getElementById("jokeid").value);
  document.getElementById("jokeGoesHere").innerHTML = joke;
});
