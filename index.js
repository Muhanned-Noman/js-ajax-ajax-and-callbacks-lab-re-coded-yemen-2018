$(document).ready(function (){
  let searchRepositories = () => {
  const searchTerms  = $('#searchTerms ').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(showSearchResults(data))
    }).fail(error => {
      showError()
    })
  }
  
  let renderSearchResults = (data) => data.items.map( result => renderSearchResult(result))
  
  let showError = () => $('#errors').html("there's been an error. Please try again.")
});
