window.onload = function() {
  document.getElementById("svg2").addEventListener("click", function() {
     var country = event.target.id;
     document.getElementById(country).style.fill="pink";
    alert(country);
  });
};
