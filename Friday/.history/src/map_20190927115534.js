const svg2 = document.querySelector("svg2");
window.onload = function(e) {
  document.querySelector(e.target.id).addEventListener("click", function() {
    alert("hej");
    console.log("hej");
  });
};
