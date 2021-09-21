//solution goes here....
const form = document.getElementById('add');
const textNote = document.getElementById('add-input');
const list = document.getElementById('list');
form.addEventListener('submit', function(e){
    console.log("first try ok!");
    console.log(textNote.value);
    const newElement = document.querySelector("ul li:first-child").cloneNode(true);
    list.appendChild(newElement);
    e.preventDefault();

})








