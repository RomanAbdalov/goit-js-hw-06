let counterValue = 0;
console.log(counterValue);

const span = document.getElementById('value');
console.log(span);

const decrBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrBtn);
decrBtn.addEventListener('click', decrement);
function decrement (){
    counterValue -= 1;
    span.textContent = counterValue;
}

const incrBtn = document.querySelector('button[data-action="increment"]');
console.log(incrBtn);
incrBtn.addEventListener('click', increment);
function increment (){
    counterValue += 1;
    span.textContent = counterValue;
   }
console.log(decrement);
console.log(increment);


