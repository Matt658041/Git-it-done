var issueContainerEl = document.querySelector("#issues-container")

var getRepoIssues = function(repo) {
    console.log(repo);
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data) {
                dispayIssues(data);
            });
        }
       else {
           alert("There was a problem with your request!");
       }
    });
};
var dispayIssues = function(issues) {
    if (issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues";
        return;
    }
    for (var i =0; i< issues.length; i++) {
        //create a link element to take users to issues on github
        var issueEl = document.createElement("a");
        issueEl.classList = "list-item flex-row justify-space-between align-center";
        issueEl.setAttribute("href", issues[i].html_url);
        issueEl.setAttribute("target", "_blank");
        issueContainerEl.appendChild(issueEl);
        //create a span to hold issue title
        var titleEl = document.createElement("span");
        titleEl.textContent = issues[i].title;
      /*   append to container */
      issueEl.appendChild(titleEl);
      //create element type
      var typeEl = document.createElement("span");
      // check if issue or just a pull request
      if (issues[i].pull_request) {
          typeEl.textContent = "(Pull Request)";
          } else {
              typeEl.textContent = "(Issue)";
          }
          // append to container 
          issueEl.appendChild(titleEl);
    }

}
getRepoIssues("facebook/react");