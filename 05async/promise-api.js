
const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Asyc 001');
        resolve(1);
    },2000);
});

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Asyc 002');
        resolve(2);
    },2000);
});

Promise.all([p1,p2])
    .then(result=> console.log(result));