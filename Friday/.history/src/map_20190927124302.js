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
        document.getElementById("countryInfo").innerText = data[0].name + data[0].population + data[0].borders + data[0].language;
        /* data now contains the response, converted to JavaScript
                   Observe the output from the log-output above
                   Now, just build your DOM changes using the data */
      });
  });
};
