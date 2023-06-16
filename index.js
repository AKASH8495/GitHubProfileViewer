const userNameInput = document.getElementById('userName');

const showDetailsButton = document.getElementById('showDetails');

// all data puts in profile info
const profileInfoData = document.getElementById('profilInfo')

const reposInfoData = document.getElementById('repoInfo')


// async and await
showDetailsButton.addEventListener('click', async () => {
      const userName = userNameInput.value;
      // I have to fetch my data form github server
      // request the data from server: using fetch API

     const res = await fetch(`https://api.github.com/users/${userName}`)
            const data = await res.json();
            showProfile(data)
             // show repos
            showRepoInfo(userName);            
            
            
})
  function showProfile(data){
            // console.log(data);
            profileInfoData.innerHTML = `
      
            <div class="card">
                  <div class="card-img">
                      
                        <img src=${data.avatar_url} alt=${data.name}>
                  </div>
                  <div class="card-boday">
                       
                        <div class="card-title">${data.name}</div>
                     
                        <div class="card-subHeading">${data.login}</div>
                        <div class="card-text">
                        
                              <p>${data.bio}</p>
                             
                              <p>${data.followers
                              } followers ${data.following
                              } following</p>

                              
                             <button>
                             <a href=${data.html_url}>
                                   Do Checkout Profile
                             </a>
                            </button>
                        </div>
                  </div>
            </div>
      
      `

}


// async and await
async function showRepoInfo(userName){
     const res = await fetch(`https://api.github.com/users/${userName}/repos`)
            const projects = await res.json();
           
                  console.log(projects);
                  for(let i=0; i<projects.length; i++){
                        reposInfoData.innerHTML += `
                  <div class="card">
                        
                        <div class="card-boday">
                             
                              <div class="card-title">${projects[i].name}</div>
                           
                              <div class="card-subHeading">${projects[i].language
                              }</div>
                              <div class="card-text">
                              
                                   <button>
                                    <a href=${projects[i].html_url}>
                                          Do Checkout Projects
                                    </a>
                                   </button>
                                    
                              </div>
                        </div>
                  </div>
                        
                        `
                  }
}








