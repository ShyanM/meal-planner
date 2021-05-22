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

/*
            $(function dietaryChange() {
                $("#dChoice").change(dietaryChange() {
                    var $dropdown = $(this);


                    $dietaryChange(data) {

                        var key = $dropdown.val();
                        var vals = [];

                        switch (key) {
                            case "omnivore":
                                vals = "Chicken Breast, Chicken Thighs, Minced Meat, Steak, Turkey Steak, Turkey Mince, Meatballs, Turkey Meatballs, Fish, Eggs, Milk, Cheese, Cottage Cheese, Cream Cheese, Coconut Milk, Honey, Almond Milk, Oat Milk, Soya Milk, Pasta, Tomato Sauce, Rice, Mixed Nuts, Dried Fruit, Mushrooms, Spinach, Green Beans, Peas, Chickpeas, Tomato Paste, Chopped Tomatoes, Tomatoes, Rolled Oats, Quinoa, Barley, Bulgar, Onions, Garlic, Potatoes, Sweet Potatoes, Lentils, Tempeh, Tofu, Nutritional Yeast, Miso, Broccoli, Carrots, Celery, Cauliflower, Cucumbers, Bell Peppers, Avocado, Kale, Asparagus, Bread, Tortillas, Bagels, Pitas, Nut Butter, Kidney Beans, Pinto Beans";

                                break;

                            case "vegiterian":
                                vals = "Eggs, Milk, Cheese, Cottage Cheese, Cream Cheese, Coconut Milk, Honey, Almond Milk, Oat Milk, Soya Milk, Pasta, Tomato Sauce, Rice, Mixed Nuts, Dried Fruit, Mushrooms, Spinach, Green Beans, Peas, Chickpeas, Tomato Paste, Chopped Tomatoes, Tomatoes, Rolled Oats, Quinoa, Barley, Bulgar, Onions, Garlic, Potatoes, Sweet Potatoes, Lentils, Tempeh, Tofu, Nutritional Yeast, Miso, Broccoli, Carrots, Celery, Cauliflower, Cucumbers, Bell Peppers, Avocado, Kale, Asparagus, Bread, Tortillas, Bagels, Pitas, Nut Butter, Kidney Beans, Pinto Beans";

                                break;

                            case "vegan":
                                "Coconut Milk, Almond Milk, Oat Milk, Soya Milk, Pasta, Tomato Sauce, Rice, Mixed Nuts, Dried Fruit, Mushrooms, Spinach, Green Beans, Peas, Chickpeas, Tomato Paste, Chopped Tomatoes, Tomatoes, Rolled Oats, Quinoa, Barley, Bulgar, Onions, Garlic, Potatoes, Sweet Potatoes, Lentils, Tempeh, Tofu, Nutritional Yeast, Miso, Broccoli, Carrots, Celery, Cauliflower, Cucumbers, Bell Peppers, Avocado, Kale, Asparagus, Bread, Tortillas, Bagels, Pitas, Nut Butter, Kidney Beans, Pinto Beans";

                            default:
                                "";

                        }
                        var $pantry = $("#pantry");
                        $pantry.empty();
                        $.each(vals, dietaryChange (index, value) {
                            $pantry.append("<li> + value +</li>");
                        })
                    });

                });


            });
            */


                $('select#dChoice').change(function(){
                if ($(this).children(":selected").val() === ""){
                    alert ("Please choose your dietary Preference!");
                } else if ($(this).children(":selected").val() === "Omnivore"){
                    append(
                    )
                }
            });


})
