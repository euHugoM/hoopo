const count = document.querySelector(".counter");
const reset = document.querySelector(".reset");

let value = 0

count.addEventListener('click', function (event){
    if (value <= 107){
        value++;
        count.innerHTML = value;
    } else{
        count.innerHTML = "Ho'opo";
    }
});

reset.addEventListener('click', function (event){
    value = 0;
    count.innerHTML = value;
});

