window.onload = function() {
  var country;
  var prevCountry;
  document.getElementById("svg2").addEventListener("click", function() {
    if (prevCountry != null)
      document.getElementById(prevCountry).style.fill = "grey";

    country = event.target.id;
    document.getElementById(country).style.fill = "red";

    prevCountry = country;
  });
};
