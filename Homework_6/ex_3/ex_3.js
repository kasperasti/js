let btn_back = document.querySelector(".back");
let btn_forward = document.querySelector(".forward");

let images = document.querySelectorAll(".photos img");
let i = 0;


btn_forward.onclick = function(){
    images[i].style.display = "none";
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = "block";
}

btn_back.onclick = function(){
    images[i].style.display = "none";
    i--;
    if (i <0) {
        i = images.length - 1;
    }
    images[i].style.display = "block";
}