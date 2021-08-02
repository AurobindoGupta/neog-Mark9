const booksbtn = document.querySelector(".books");
const moviesbtn = document.querySelector(".movies");
const animebtn = document.querySelector(".anime");
const showList = document.querySelector(".showList");
const listItems = document.querySelector(".listItems");



booksbtn.addEventListener("click",  bookList);
moviesbtn.addEventListener("click",  movieList);
animebtn.addEventListener("click",  animeList);

function bookList(){
    var newLi = document.createElement("li");
    showList.innerHTML= ("working books");
    const bookNameList = [{name:"shiva trilogy", rating:"5/5"},{name:"2shiva trilogy", rating: "5/5"},{name:"3shiva trilogy", rating: "5/5"}];
    
    // let printList= JSON.stringify(bookNameList);
    listItems.innerHTML = "";
   bookNameList.map((item)=>{
    newLi.appendChild(document.createTextNode(item.name +"("+ item.rating +")"));

    listItems.appendChild(newLi);
    //    listItems.innerHTML += item.name +"("+ item.rating +")";
   })
}
function movieList(){
    var newLi = document.createElement("li");
    showList.innerHTML= ("working movie");
    const movieNameList=[{name:"American Sniper",rating:"5/5"},{name:"American Sniper",rating:"5/5"},{name:"American Sniper",rating:"5/5"}]
    listItems.innerHTML = "";
    movieNameList.map((item)=>{
        newLi.appendChild(document.createTextNode(item.name +"("+ item.rating +")"));

    listItems.appendChild(newLi);
    })
}
function animeList(){
    var newLi = document.createElement("li");
    showList.innerHTML = ("working anime");
    const animeNameList=[{name:"Konosuba",rating:"5/5"},{name:"One Peice",rating:"5/5"},{name:"Naruto",rating:"5/5"}]
    listItems.innerHTML = "";
    animeNameList.map((item)=>{
        newLi.appendChild(document.createTextNode(item.name +"("+ item.rating +")"));

        listItems.appendChild(newLi);
    })
}