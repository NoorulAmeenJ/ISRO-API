// var API = "https://isro.vercel.app/api/centres"
// fetch(API)
// .then((response) => response.json()) 
// .then((data)=> {
//      data.map((item) => item.center[0])
// })  
    // console.log(data.centres[0].name)
    // fetch("https://restcountries.com/v3.1/all")
// .then((response)=>response.json())
// .then((value)=>{ 
// console.log(value)
//   value.forEach((data)=>{
//     aakifah(data.flags.svg,data.population)
//   // console.log(`${data.flag} ${data.population} ${data.region} ${data.capital}`)
//   })
// })
 fetch("https://isro.vercel.app/api/centres")
.then((response)=>response.json())
.then((data)=>{ 
    for(var i=0; i<data.centres.length; i++){
   
    document.body.innerHTML +=
    `
    
    `
    }
  })


//   data.centres[i].name
// data.centres[i].Place
// data.centres[i].State
// data.centres[i].id

{/* <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title" id= "id">${data.centres[i].id}</h5>
      <h5 class="card-title">${data.centres[i].name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.centres[i].Place}</h6>
      <p class="card-text">${data.centres[i].State}</p>
    </div>
  </div> */}