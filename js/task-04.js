let counterValue = 0;
console.log(counterValue);

const valueSpan = document.getElementById('value');
console.log(valueSpan);

const decrBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrBtn);
decrBtn.addEventListener('click', decrement);
function decrement (){
    counterValue -= 1;
    valueSpan.textContent = counterValue;
}

const incrBtn = document.querySelector('button[data-action="increment"]');
console.log(incrBtn);
incrBtn.addEventListener('click', increment);
function increment (){
    counterValue += 1;
    valueSpan.textContent = counterValue;
   }
console.log(decrement);
console.log(increment);


