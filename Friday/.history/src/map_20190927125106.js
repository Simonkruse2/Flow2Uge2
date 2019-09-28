window.onload = function() {
  var country;
  var prevCountry;
  document.getElementById("svg2").addEventListener("click", function() {
    if (prevCountry != null)
      document.getElementById(prevCountry).style.fill = "c0c0c0";

    country = event.target.id;
    document.getElementById(country).style.fill = "red";

    prevCountry = country;
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + country;
    fetch(url)
      .then(res => res.json()) //in flow1, just do it
      .then(data => {
        document.getElementById("countryName").innerText =
          "Name: " + data[0].name;
        document.getElementById("countryCapital").innerText =
          "Capital: " + data[0].capital;
        document.getElementById("countryPopulation").innerText =
          "Population: " + data[0].population;
        document.getElementById("countryBorders").innerText =
          "Borders: " + data[0].borders;
        /* data now contains the response, converted to JavaScript
                   Observe the output from the log-output above
                   Now, just build your DOM changes using the data */
      });
  });
};
