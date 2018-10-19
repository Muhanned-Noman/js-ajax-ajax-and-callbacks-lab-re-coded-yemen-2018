$(document).ready(function (){
  var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    }).fail(error => {
      displayError()
    })
  }
  
  var showError = () => $('#errors').html("there's been an error. Please try again.")
});
