class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
         console.log(user);
         this.profile.innerHTML=`
         <div class="card card-body md-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.company}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
       </div>
       <h3 class="page-heading mb-3">Latest Repos</h3>
       <div id="repos"></div>
         `;
         
    }
    //Show user repo
    showRepos(repos){
        let output= '';

        repos.forEach(function(repo){
            output += `
<div class="card card-body md-3">
         <div class="row">
      <div class="col-md-6">
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      </div>
      <div class="col-md-6">
      <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
      <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
      <span class="badge badge-success">Forms: ${repo.forms_count}</span>
      </div>
    </div>       
 </div>
            `;
        });

        document.getElementById('repos').innerHTML=output;
    }

    clearProfile(){
        this.profile.innerHTML='';
    }

    showAlert(message, className){
        //Clear any remaining alert
        this.clearAlert();

        const alert=`
        <div class="${className}">
         ${message}
        </div>
        `;
        const container = document.querySelector('.searchContainer');
        container.insertAdjacentHTML('beforebegin', alert);
    }

    clearAlert(){
        const currentAlert=document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}


// login: "b"
// id: 31712
// node_id: "MDQ6VXNlcjMxNzEy"
// avatar_url: "https://avatars2.githubusercontent.com/u/31712?v=4"
// gravatar_id: ""
// url: "https://api.github.com/users/b"
// html_url: "https://github.com/b"
// followers_url: "https://api.github.com/users/b/followers"
// following_url: "https://api.github.com/users/b/following{/other_user}"
// gists_url: "https://api.github.com/users/b/gists{/gist_id}"
// starred_url: "https://api.github.com/users/b/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/b/subscriptions"
// organizations_url: "https://api.github.com/users/b/orgs"
// repos_url: "https://api.github.com/users/b/repos"
// events_url: "https://api.github.com/users/b/events{/privacy}"
// received_events_url: "https://api.github.com/users/b/received_events"
// type: "User"
// site_admin: false
// name: "Benjamin Black"
// company: null
// blog: "http://blog.b3k.us"
// location: "Seattle, WA"
// email: "b@b3k.us"
// hireable: null
// bio: null
// public_repos: 95
// public_gists: 10
// followers: 178
// following: 2
// created_at: "2008-10-29T21:00:03Z"
// updated_at: "2020-05-20T22:54:35Z"