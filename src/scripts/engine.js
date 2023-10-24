const pianoKeys = document.querySelectorAll('.key')
let audio = new Audio("./tunes")

 const playTune = (key)=> {

 }

pianoKeys.forEach((key)=> {
    console.log(key.innerText)
    key.addEventListener("click",()=> playTune)
})