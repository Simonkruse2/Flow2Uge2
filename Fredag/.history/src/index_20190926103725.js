import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

JOKEBYID.onclick = function(e) {
  e.preventDefault();
  var jokeId = document.getElementById("jokeId");
  const joke = jokes.getJokeById(jokeId);
  document.getElementById("jokeGoesHere").innerHTML = joke;
};
