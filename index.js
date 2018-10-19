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
  
  let showSearchResult = (result) => {
  return `
      <div>
        <h2><a href="${result.html_url}">${result.name}</a></h2>
        <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${result.description}</p>
      </div>
      <hr>
    `
}
  
  let showError = () => $('#errors').html("there's been an error. Please try again.")
});
