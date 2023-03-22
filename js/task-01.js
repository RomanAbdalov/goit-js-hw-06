const liItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liItem.length}`)
liItem.forEach(el => {
    console.log(el.firstElementChild.textContent);
    console.log(el.lastElementChild.children.length);
});
