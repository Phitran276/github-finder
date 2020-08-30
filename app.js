//Search input
const searchUser = document.getElementById('searchUser');
//Init Github
const github=new GitHub();
//Init profile
const ui  = new UI();

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText=e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            
            if(data.profileData.message == "Not Found"){
               //Show error
               ui.showAlert('User not found', 'alert alert-danger');
            }else{
                //Show profile
               ui.clearAlert();
               ui.showProfile(data.profileData);
               console.log(data.repoData);
               ui.showRepos(data.repoData);
            }
            
        })
    }else{
        //Clear profile
        ui.clearProfile;
    }
    
    
    
})