class GitHub {
    constructor(){
        this.client_id = '1e0944e0e019ec9ea80a';
        this.client_secret = '4e6d7263af857057abaa9781672f63ea0e68313a';
        
    }

    async getUser(user) {
        const profileRespon = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoRespon = await fetch(`https://api.github.com/users/${user}/repos?
        client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileRespon.json();
        const repoData= await repoRespon.json();

        return {
            profileData,
            repoData
        }
    }
}

