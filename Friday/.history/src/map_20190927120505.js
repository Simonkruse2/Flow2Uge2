window.onload = function() {
  var country;
  var prevCountry;
  document.getElementById("svg2").addEventListener("click", function() {
    country = event.target.id;
    prevCountry = event.target.id;

    document.getElementById(country).style.fill = "red";

    prevCountry = country;
    document.getElementById(prevCountry).style.fill = "grey";
  });
};
