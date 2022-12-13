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
      const menu=document.querySelector("div#movies-menu");
       const menuLi=document.createElement("ul");
      const menuBar=document.createElement("li");
      menuBar.innerHTML=film.title;
       menuLi.appendChild(menuBar);
       menuBar.style.cursor="pointer";
       menu.appendChild(menuLi);
       menuBar.addEventListener("click",()=>{
          movieInfo(film);
       });
  }
//   //getting the movies info
  function movieInfo(film) {
     const movie = document.querySelector("#name");
     movie.innerHTML = film.title;
     const image = document.querySelector("#posters");
     image.src = film.poster;
     const runtime = document.querySelector("#runtime");
     runtime.innerHTML = `${film.runtime}MINUTES`;
     const showtime = document.querySelector("#showtime");
     showtime.innerHTML = film.showtime;
    const availabletkts = document.querySelector("#available-tickets");
     availabletkts.innerHTML = film.tickets_sold;
     const capacity=document.querySelector("#capcity");
     capacity.innerHTML=film.capacity;
   }
//    // create a button that will work on the tickects
//    function capacitydetails(film){
//       const buttons=document.querySelector("#btn");
//       const btns=document.createElement("button");
//       buttons.appendChild(btns);
//       buttons.addEventListener("click",()=>{
//         let bts=document.getElementById("button");
//           if  (bts>0){
//             document.getElementById("bts").textcontent=bts-1
//           }else
//           if(parseInt(bts===0)){
//             document.getElementById("buyticket")="soldout"
//           }
//       })
  
//    }
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
  