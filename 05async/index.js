// implementation
// getUser(1,(user)=>{
//     getRepo(user,(login)=>{
//         getCommits(login,displayCommits)
//     });
// }); 

// getUser(1).then(user=>{
//     getRepo(user).then(repo=>{
//         getCommits(repo).then(login=>console.log(login));
//     });
// });

// getUser(1)
//     .then(user => getRepo(user))
//     .then(repo => getCommits(repo))
//     .then(login => console.log(login))
//     .catch(err => console.log("error",err));

    //Async & await
async function displayCommit(){
    const user = await getUser(1);
    const repo = await getRepo(user);
    const login = await getCommits(repo);
    console.log(login);
}

displayCommit();


// Deifinition
function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Testing Call')
            resolve({id:id,name:"randeel"});
        },2000);
    });
    
}

function getRepo(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:user.name,repo:"git"});
        },1000);
    });
    
}

function getCommits(login){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({user:login.name,coures:"code with Mosh"});    
        },1000);
    });
    
}