
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function getData(){
  try{
    const customer = await getCustomer(1);
    if(customer.isGold){
    const movie = await getTopMovies(customer.isGold);
    const mail = await sendEmail(customer.email,movie);
    console.log(mail);
    }}catch(err){
      console.log('Error',err.message);
    }


}

getData();


function getCustomer(id) {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  });
}

function getTopMovies(isGold) {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve({name:"test",email:email,movie:movies});
    }, 4000);
  })
  
}