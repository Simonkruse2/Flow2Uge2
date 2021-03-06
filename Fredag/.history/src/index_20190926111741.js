import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

document.getElementById("jokeByIdButton").addEventListener("click", function() {
  var joke = jokes.getJokeById(document.getElementById("jokeid").value);
  document.getElementById("jokeGoesHere").innerText = joke;
});
