const apiKey = '5d576382955ff5829fc3844390db4427'
const baseAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`

$(function () {
  $("#goButton").click(afterGoClicked);
})

function afterGoClicked() {
  var genre = $("#genreSelect").val();
  var year = $("#yearBox").val();
  
  // Call buildQueryString to build a URL and assign it
  var completeUrl = buildQueryString(baseAPIUrl, genre, year);

  // Load the JSON from the API with completeUrl, call afterDataLoaded
  $.getJSON(completeUrl, afterDataLoaded);
}

//Combine the baseUrl, genre, and year together to create a complete url
function buildQueryString(baseUrl, genre, year){
  return `${baseUrl}&primary_release_year=${year}&with_genres=${genre}`;
}

// Call this function with the data object that comes back from getJSON
function afterDataLoaded(dataObject){
  var posterBaseUrl = "https://image.tmdb.org/t/p/w500"
  for (var i = 0; i < 9; i++) {
    var fullUrl = posterBaseUrl + dataObject.results[i].poster_path;
    $("#movieImg"+i).attr("src", fullUrl)
  }
}
