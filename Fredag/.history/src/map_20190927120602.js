window.onload = function() {
  var country;
  var prevCountry;
  document.getElementById("svg2").addEventListener("click", function() {
    country = event.target.id;
    document.getElementById(prevCountry).style.fill = "grey";

    document.getElementById(country).style.fill = "red";

    prevCountry = country;
  });
};
