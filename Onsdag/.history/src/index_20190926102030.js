import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");


var jokeByIdButton = document.getElementById("jokeByIdButton");
const joke = jokes.getJokeById(jokeId);
document.getElementById("jokeGoesHere").innerHTML = joke;



