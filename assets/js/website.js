$(document).ready(function () {

    /* scroll to second section 
    created with the help of : https://www.youtube.com/watch?v=xYDgc05oQzU 
*/

    $(".arrowButton").click(function () {
        $('html, body').animate({
            scrollTop: $("section2").offset().top
        })
    })


    /* https://freshman.tech/todo-list/*/

    /* search function*/

    let foodItem = [];

    function renderFoodItem(newFood) {
        localStorage.setItem('foodItem', JSON.stringify(foodItem));
        const list = document.querySelector('.shoppingList');
        const item = document.querySelector(`[data-key='${newFood}']`)

        const isChecked = newFood.checked ? 'done' : '';
        const node = document.createElement('li');
        node.setAttribute('class', `food-item ${isChecked}`);
        node.setAttribute('data-key', newFood.id);
        node.innerHTML = `
    <input id="${newFood.id}" type= "checkbox">
    <label for="${newFood.id}" class="tick js-tick"></label>
    <span>${newFood.text}</span>
    
    `;

        if (item) {
            list.replaceChild(node, item);
        } else {



            list.append(node);
        }
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

    function toggleDone(key) {
        const index = foodItem.findIndex(item => item.id === Number(key));

        foodItem[index].checked = !foodItem[index].checked;
        renderFoodItem(foodItem[index]);
    }

    const form = document.querySelector('.js-form')
    form.addEventListener('submit', event => {
        event.preventDefault();

        const input = document.querySelector('.newFoodInput');


        const text = input.value.trim();
        if (text !== '') {
            addnewFood(text);
            input.value = '';
            input.focus();
        }
    })

    const list = document.querySelector('.shoppingList');

    list.addEventListener('click', event => {
        if (event.target.classList.contains('js-tick')) {
            const itemKey = event.target.parentElement.dataset.key;
            toggleDone(itemKey);
        }
    })

    document.addEventListener('DOMContentLoaded', () => {
        const ref = localStorage.getItem('foodItem');
        if (ref) {
            foodItem = JSON.parse(ref);
            foodItem.forEach(t => {
                renderFoodItem(t)
            })
        }
    })

    function dietaryChange() {
        $("#dChoice").change(dietaryChange() {
            var $dropdown = $(this),

            $.getJSON("jsondata/data.json", dietaryChange(data) {

                var key = $dropdown.val();
                var vals = [];

                switch (key) {
                    case "omnivore":
                        vals = data.omnivore.split(",");

                        break;

                    case "vegiterian":
                        vals = data.vegiterian.split(",");

                        break;

                    case "vegan":
                        vals = data.vegan.split(",");

                    default:
                        "";

                };
            });
        });
    };


});