const svg2 = document.querySelector("svg2");
window.onload = function() {
  document.getElementById("svg2").addEventListener("click", function() {
     var country = document.getElementById(event.target.id);
    alert(country);
    console.log("hej");
  });
};
