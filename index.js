const count = document.querySelector(".counter");
const reset = document.querySelector(".reset");
const volume = document.getElementById('volume')

let value = 0

const audio = new Audio('mindfulness.mp3')


count.addEventListener('click', function (event){
    const utterance = new SpeechSynthesisUtterance(value + 1)
    let voices = speechSynthesis.getVoices()
    utterance.voice = voices[1]
    if (value <= 107){
        value++;
        if(value > 1 && value % 10 === 0){
            speechSynthesis.speak(utterance)
        }
        navigator.vibrate(100);
        count.innerHTML = value;
    } else{
        count.innerHTML = "Ho'opo";
        navigator.vibrate([100, 200, 100, 50, 10])
    }

    audio.volume = 0.5
    audio.play()    
});

reset.addEventListener('click', function (event){
    value = 0;
    count.innerHTML = value;
    audio.load()
});



volume.addEventListener('click', (e) => {
    
    if(audio.paused){
        audio.play()
    }else {
        audio.pause()
    }
    
    
})

