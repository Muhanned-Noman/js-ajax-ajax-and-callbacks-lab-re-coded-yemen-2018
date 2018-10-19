$(document).ready(function (){
  let searchRepositories = () => {
  const searchTerms  = $('#searchTerms ').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(showSearchResults(data))
    }).fail(error => {
      showError()
    })
  }
  
  let showSearchResults = (data) => data.items.map( result => showSearchResult(result))
  
  let showError = () => $('#errors').html("there's been an error. Please try again.")
});
