//let title = document.getElementById('title');
//console.log(title)

let bouton= document.querySelector("#boutondm")
let title = document.querySelector("#image")
let title2 = document.querySelector("#texte_test")
let title3 = document.querySelector("#ecole")
let title4 = document.querySelector("#para")
let back = document.querySelector("body")

bouton.addEventListener("click", function() {
    console.log("titre cliqué")
    title.classList.toggle('red')
    title2.classList.toggle('red')
    title3.classList.toggle('red')
    title4.classList.toggle('red')
    back.classList.toggle('bod')
})




//let title = document.querySelector('#titre1')
//title.addEventListener("click",function()


//})
