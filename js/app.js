'use strict'
let movieForm = document.getElementById('movieForm');
let movieTable =document.getElementById('movieTable');
let tableEl = document.createElement('table');
movieTable.appendChild(tableEl);

function movies (movieName , movieImage, movieRelease){
    this.movieName= movieName;
    this.movieImage = movieImage;
    this.movieRelease =movieRelease;
    movies.all.push(this);
}
movies.all=[];

movies.prototype.render = function(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl = document.createElement('td');
    tdEl.textContent =this.movieImage;
    trEl.appendChild(tdEl);
    let tdE2 = document.createElement('td');
    let img = document.createElement('img')
    img.src='./img/'+this.movieImage;
    tdE2.appendChild(img);
    trEl.appendChild(tdE2);
    let tdE3 = document.createElement('td');
    tdE3.textContent =this.movieRelease;
    trEl.appendChild(tdE3);

}
getData()
let movieImage1;
movieForm.addEventListener('submit',submitHandler);
function submitHandler (event){
    event.preventDefault();
     movieImage1= event.target.image.value;
    let movieName1= event.target.movieName.value;
    let movieRelease1= event.target.release.value;
let result = new movies(movieImage1,movieName1,movieRelease1);
result.render();
localStorage.result1=JSON.stringify(movies.all);

}

function getData(){
    let stored = JSON.parse(localStorage.getItem('result1')) || [];
    for (let i=0 ;i<stored.length;i++){
        let result2= new movies (stored[i].movieImage,stored[i].movieName,stored[i].movieRelease);
        result2.render();
    }
}

function data(){
    localStorage.clear();
    location.reload();
}