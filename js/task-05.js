const refs = {
    input: document.getElementById('name-input'),
    spanEl: document.getElementById('name-output')
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.trim()!== "") {
        refs.spanEl.textContent = event.currentTarget.value;
        } else {
            refs.spanEl.textContent = `Anonymous`;
        };
    console.log(event.currentTarget.value);
};


// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// function onInputFocus(){
//     console.log(`Інпут отриав фокус - focus`);
// };

// function onInputBlur(){
// console.log(`Інпут втратив фокус - blur`)
// };

// refs.input.addEventListener('change', onInputChange);


