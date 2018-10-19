$(document).ready(function (){
  var searchRepositories = () => {
  const search = $('#search').val()
  $.get(`https://api.github.com/search/repositories?q=${search}`, data => {
      $('#results').html(showSearchResults(data))
    }).fail(error => {
      showError()
    })
  }
  
  var showError = () => $('#errors').html("there's been an error. Please try again.")
});
