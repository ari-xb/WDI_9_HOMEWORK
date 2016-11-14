console.log('hi');

$('#search-btn').on('click', function() {

  $('#list').empty(); // clears the search results div of children

  //get input from users
  var input = $('#q').val();

  // make AJAX requestto ombd
  var settings = {
    url: 'http://omdbapi.com/',  // required
    data: { s: input }, // to go aftert eh query sting '?s='
    method: 'get',  // default optional
    datatype: 'json'  // usually auto detected
  }
  // make an AJAX request to Giphy api
  $.ajax(settings).done(function(res) {

    var movies = res.Search;

    movies.forEach(function(movie) {

      var $row = $('<a>') // create an a tag
      .attr('target', '_black')  // adding attributes to the a tag
      .attr('href', 'http://www.imdb.com/title/' + movie.imdbID)  // forming the link
      .text(movie.Title); // create an a tag with text of movie title in it.

      $('#list').append($row)

    })
  });

})
