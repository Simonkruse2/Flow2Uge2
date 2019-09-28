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

function addQuote(){
  e.preventDefault();
  var url = "https://studypoints.info/jokes/api/jokes/period/hour"
  fetch(url)
          .then(res => res.json()) //in flow1, just do it
          .then(data => {
              // Inside this callback, and only here, the response data is available
              console.log("data", data);
              JOKECONTENT.innerHTML = jokesToTable(data);
              JOKEBUTTONS.style = "";
              H1CJOKES.innerHTML = "These are our jokes";
              H3CJOKES.innerHTML = " ";
              /* data now contains the response, converted to JavaScript
               Observe the output from the log-output above
               Now, just build your DOM changes using the data*/
          });
};


const quoteIdButton = document.getElementById("quoteId");
quoteIdButton.onclick = funciton(){

}