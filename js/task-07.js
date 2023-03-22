const refs = {
    inputEl: document.getElementById('font-size-control'),
    spanEl:  document.getElementById('text')
};

function onFontControllerInput (event) {
refs.spanEl.style.fontSize =  refs.inputEl.value + 'px';
};

refs.inputEl.addEventListener('input', onFontControllerInput);

onFontControllerInput();