import addPoint from './counter.js';

let field = document.querySelector(".field");

for (let i = 0; i < 16; i++) {
    field.children[i].addEventListener('click', ()=>{
        if (field.children[i].firstChild) {
            addPoint(1);
            field.children[i].removeChild(field.children[i].firstChild);
        }
    })
}