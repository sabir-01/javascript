
// function create() {
//     let btn = document.getElementsByClassName("button")[0];
//     var card = document.getElementById("card")
//     btn.addEventListener("click", function () {
//         card.innerHTML += `
//                 <img src="./ASSETS/18-15-55-407_512.webp" alt="">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 </div>
//             `;
//     });
// }
// create();



let getnews=(search)=>{
fetch('https://newsapi.org/v2/everything?q=${search}&from=2024-01-20&sortBy=publishedAt&apiKey=32d4669a6f9544709fad39638224e17d')
.then(res=>res.json())
.then(res=>{
const articles=res.articles;
let news=document.getElementById("news")
for(var i=0;i<articles.length;i++){
   console.log(articles[i])
    news.innerHTML+=`

  <div class="card" style="width: 18rem;">
  <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${articles[i].author}</h5>
    <p class="card-text">${articles[i].description.slice(0,100)}..</p>
    <a href="#" class="btn btn-primary">${articles[i].publishedAt}</a>
  </div>
</div>

    `
}
})
}

getnews()
let getdata=() =>{
     let news=document.getElementById("news")
     var search=document.getElementById("search")
     news.innerHTML=""
    getnews(search.value)
}