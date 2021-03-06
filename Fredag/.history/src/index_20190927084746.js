import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

function getJokeById(id) {
  document.getElementById("jokeGoesHere").innerHTML = joke;
}
const jokeButton = document.getElementById("jokeByIdButton");
jokeButton.onclick = function() {
  var id = jokes.getJokeById(document.getElementById("jokeid").value);
  getJokeById(id);
};
