let btn_1 = document.querySelector(".btn1");
let qu1 = document.querySelector(".qu1");
let qu11 = document.querySelector(".qu1-1");

let btn_2 = document.querySelector(".btn2");
let qu2 = document.querySelector(".qu2");
let qu22 = document.querySelector(".qu2-2");

let btn_3 = document.querySelector(".btn3");
let qu3 = document.querySelector(".qu3");
let qu33 = document.querySelector(".qu3-3");

let itotal = document.querySelector(".itotal");

let total = document.querySelector(".total");
let pr1 = document.querySelector(".product-1");
let pr2 = document.querySelector(".product-2");
let pr3 = document.querySelector(".product-3");




btn_1.addEventListener("click", function() {
    qu1.value = parseInt(qu1.value) + 1;
    qu11.value = parseInt(qu11.value) + 150;
    itotal.value = parseInt(qu11.value) + parseInt(qu22.value) + parseInt(qu33.value);
    pr1.style.display = "flex";
    total.style.display = "flex";
  });

btn_2.addEventListener("click", function() {
    qu2.value = parseInt(qu2.value) + 1;
    qu22.value = parseInt(qu22.value) + 200;
    itotal.value = parseInt(qu11.value) + parseInt(qu22.value) + parseInt(qu33.value);
    pr2.style.display = "flex";
    total.style.display = "flex";
  });

btn_3.addEventListener("click", function() {
    qu3.value = parseInt(qu3.value) + 1;
    qu33.value = parseInt(qu33.value) + 100;
    itotal.value = parseInt(qu11.value) + parseInt(qu22.value) + parseInt(qu33.value);
    pr3.style.display = "flex";
    total.style.display = "flex";
  });
