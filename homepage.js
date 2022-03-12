var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");


var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
     fetch(apiUrl).then(function(response) {
         response.json().then(function(data) {
             displayRepos(data,user);
         });
      });
    };



var formSubmitHandler = function(event){
    event.preventDefault();
    //get value from input element
    var username = nameInputEl.value.trim();
    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else { 
        alert("Pleae enter a GitHub username");
    }
    
    console.log(event);
};

/* fetch(apiUrl).then(function (response) { ... }); */
userFormEl.addEventListener("submit", formSubmitHandler);

var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
    //clear old content 
    repoContainerEl.textContent = "";
    repoSearchTerm.textContent = searchTerm;
}

