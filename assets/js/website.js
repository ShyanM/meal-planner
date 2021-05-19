$(document).ready(function () {

    /* scroll to second section 
    created with the help of : https://www.youtube.com/watch?v=xYDgc05oQzU 
*/

    $(".arrowButton").click(function () {
        $('html, body').animate({
            scrollTop: $("section2").offset().top
        })
    })

});


let foodItem = [];

function renderFoodItem(newFood){
    const list = document.querySelector('.shoppingList');

    const isChecked = newFood.checked ? 'done' : '';
    const node = document.createElement('li');
    node.setAttribute('class',  `food-item ${isChecked}`);
    node.setAttribute('data-key', newFood.id);
    node.innerHTML = `
    <input id="${newFood.id}" type= "checkbox"/>>
    <label for="${newFood.id}" class="tick js-tick"></label>
    <span>${newFood.text}</span>
    
    `;

    list.append(node);
}

/* add new food item*/


function addnewFood(text) {
    const newFood = {
        text,
        checked: false,
        id: Date.now(),
    };


foodItem.push(newFood);
renderFoodItem(newFood);

};

const form = document.querySelector('.js-form')
form.addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.newFoodInput');


const text = input.value.trim();
if (text !== ''){
   addnewFood(text);
    input.value = '';
    input.focus();
}
})