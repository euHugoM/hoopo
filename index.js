const count = document.querySelector(".counter");
const reset = document.querySelector(".reset");

let value = 0

count.addEventListener('click', function (event){
    if (value <= 107){
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

