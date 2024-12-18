// let title= document.querySelector("#titre1");
// let content = document.querySelector("#contenu1");

// title.addEventListener("click", function() {
//     content.classList.toggle("contenu-open");

// });

let title= document.querySelector("#titre1");
let title2= document.querySelector("#titre2");

title.addEventListener("click", function() {
    let content = title.nextElementSibling;
    content.classList.toggle("contenu-open");
});
title2.addEventListener("click", function() {
    let content = title2.nextElementSibling;
    content.classList.toggle("contenu-open");
});
