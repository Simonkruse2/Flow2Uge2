window.onload = function() {
  document.getElementById("svg2").addEventListener("click", function() {
     var country = event.target.id;
     var prevCountry = event.target.id;

     document.getElementById(country).style.fill="red";
     document.getElementById(prevCountry).style.fill="grey";
  });
};
