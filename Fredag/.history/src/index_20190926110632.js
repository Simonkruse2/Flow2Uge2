import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

var jokeId = document.getElementById("jokeId").value;
var joke = jokes.getJokeById(jokeId); 
document.getElementById("jokeGoesHere").innerText = "Joke goes here " + joke;
