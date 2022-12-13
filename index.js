document.addEventListener("DOMContentLoaded", ()=> {
    getAllposters();
  });
  function getAllposters() {
    fetch("http://localhost:3000/films")
      .then((response) => response.json())
      .then(movies);
  }
  function movies(film) {
    film.forEach(moviesdata);
  }
//   // it creates list for the movie names
  function moviesdata(film) {   
      const menu=document.querySelector("div#movies-tickets");
       const menuLi=document.createElement("ul");
      const menuBar=document.createElement("li");
      menuBar.innerHTML=film.title;
       menuLi.appendChild(menuBar);
       menuBar.style.cursor="pointer";
       menu.appendChild(menuLi);
       menuBar.addEventListener("click",()=>{
          moviesAvailable(film);
       });
  }
//   //getting the movies info
  function moviesAvailable(film) {
     const movie = document.querySelector("#moviesName");
     movie.innerHTML = film.title;
     const image = document.querySelector("#movies");
     image.src = film.poster;
     const moviesTime = document.querySelector("#moviestime");
     moviesTime.innerHTML = `${film.moviesTime}MINUTES`;
     const displaytime = document.querySelector("#displaytime");
     displaytime.innerHTML = film.displaytime;
    const queuetickets = document.querySelector("#queue-tickets");
    queuetickets.innerHTML = film.tickets_sold;
     const capacity=document.querySelector("#capcity");
     capacity.innerHTML=film.capacity;
     //added
     const b=document.querySelector("#btns")
     const btns=document.createElement("button");
      btns.innerHTML="BookMyShow";
       btns.id="ticket";
       b.appendChild(btns);
       btns.addEventListener("click",()=>{
            if  (film.tickets_sold< film.capacity){
             film.tickets_sold +=1;
             queuetickets.innerHTML = ` tickets sold:${film.tickets_sold}`;
            
          }else {
            queuetickets.innerHTML=`soldout`
           }
          })
     
   }
   //added
 

//    // create a button that will work on the tickects
  //  function capacitydetails(film){
  //     const buttons=document.querySelector("#btn");
  //     const btns=document.createElement("button");
  //     buttons.appendChild(btns);
  //     buttons.addEventListener("click",()=>{
  //       let bts=document.getElementById("button");
  //         if  (bts>0){
  //           document.getElementById("bts").textcontent=bts-1
  //         }else
  //         if(parseInt(bts===0)){
  //           document.getElementById("buyticket")="soldout"
  //         }
  //     })
  
  //  }
// //   // function moviesmenu(film) {
// //   //   const bar = document.querySelector("#filmes");
// //   //   bar.innerHTML = film.title;
// //   //   const x = document.querySelector(".filmitem");
// //   //   x.appendChild(bar);
// //   //   bar.addEventListener("click", (e) => {
// //   //     movieInfo(film);
// //   //   });
// //   // }
// //   // function ticketdetails(film){
// //   //     const btn=document.querySelector("#button");
// //   //     btn.addEventListener("click",()=>{
  