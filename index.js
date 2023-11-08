const count = document.querySelector(".counter");
const reset = document.querySelector(".reset");

let value = 0



count.addEventListener('click', function (event){
    const utterance = new SpeechSynthesisUtterance(value)
    let voices = speechSynthesis.getVoices()
    utterance.voice = voices[10]
    if (value <= 107){
        if(value > 1 && value % 10 === 0){
            speechSynthesis.speak(utterance)
        }
        value++;
        navigator.vibrate(100);
        count.innerHTML = value;
    } else{
        count.innerHTML = "Ho'opo";
        navigator.vibrate([100, 200, 100, 50, 10])
    }
});

reset.addEventListener('click', function (event){
    value = 0;
    count.innerHTML = value;
});
