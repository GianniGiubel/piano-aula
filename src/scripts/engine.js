const pianoKeys = document.querySelectorAll('.key')
const volume = document.querySelector('.volume-slider input')
const keysCheck = document.querySelector('.keys-check input')

let audio = new Audio("src/tunes/a.wav")

const playTune = (key)=> {
    audio.src = `src/tunes/${key}.wav`
    audio.play()
    
    const activatedKey = document.querySelector(`[data-key="${key}"]`)    
    activatedKey.classList.add("active")
    setTimeout(()=> {
        activatedKey.classList.remove("active")
    },150)
}

const mapedKeys = []

pianoKeys.forEach((element)=> {    
    element.addEventListener("click",()=> 
    playTune(element.dataset.key))
    mapedKeys.push(element.dataset.key)      
})

document.addEventListener("keydown",(event)=> {
    if(mapedKeys.includes(event.key)) {
        playTune(event.key)
    }
})

const handleVolume = (event) => {
    audio.volume = event.target.value
}

const showKeys = () => {
    pianoKeys.forEach(element => element.classList.toggle("hide"))
}

volume.addEventListener("input", handleVolume)
keysCheck.addEventListener("click", showKeys)