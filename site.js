let bouton= document.querySelector("#boutondm")
let title = document.querySelector("#bdr")
let Menu = document.querySelector("#barreh")
let Base= document.querySelector("body")
let de= document.querySelector("#fond")
let race = document.querySelector("#detail")
let camp = document.querySelector("#detail2")
let saga = document.querySelector("#detail3")
let goku = document.querySelector("#goku1")

bouton.addEventListener("click", function() {
    console.log("titre cliqué")
    title.classList.toggle('red')
    Menu.classList.toggle('red1')
    Base.classList.toggle('red2')
    de.classList.toggle('red3')
    race.classList.toggle('red3')
    camp.classList.toggle('red3')
    saga.classList.toggle('red3')

})

race.addEventListener("click", function() {
    let content = race.nextElementSibling
    content.classList.toggle("contenu-open")
})
camp.addEventListener("click", function() {
    let content = camp.nextElementSibling
    content.classList.toggle("contenu-open")
})
saga.addEventListener("click", function() {
    let content = saga.nextElementSibling;
    content.classList.toggle("contenu-open");
});

