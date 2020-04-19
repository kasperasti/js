let small1 = document.querySelector(".small-1");
let small2 = document.querySelector(".small-2");
let small3 = document.querySelector(".small-3");

let big1 = document.querySelector(".big-1");
let big2 = document.querySelector(".big-2");
let big3 = document.querySelector(".big-3");
let bigPic = document.querySelector(".pic-big");

let picSmall = document.querySelectorAll(".pic-small");
let picBig = document.querySelectorAll(".pic-big");



small1.onclick = function(){
    let img = new Image();
    img.src = "imgBig/11.jpg";
    img.onload = function(){
        big1.style.display = "block";
    if (big2.style.display = "block"){
        big2.style.display = "none";
    };
    };
    img.onerror = function(){
        alert('картинка не существует')
    };
}

small2.onclick = function(){
    let img = new Image();
    img.src = "imgBig/22.jpg";
    img.onload = function(){
        big2.style.display = "block";
    if (big1.style.display = "block"){
        big1.style.display = "none";
    };
    };
    img.onerror = function(){
        alert('картинка не существует')
    };
}

small3.onclick = function(){
    let img = new Image();
    img.src = "imgBig/33.jpg";
    img.onload = function(){
        bigPic.style.display = "none";
        big3.style.display = "block";
    };
    img.onerror = function(){
        bigPic.style.display = "none";
        alert('картинка не существует')
    };
}








//big1.style.display = "block";
//        if (big2.style.display = "block"){
//            big2.style.display = "none";