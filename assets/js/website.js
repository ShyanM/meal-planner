$(document).ready(function () {

    /* scroll to second section 
    created with the help of :https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll_jquery and https://codepen.io/nxworld/pen/OyRrGy 
*/
$(function() {
    $('a').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

    /* https://freshman.tech/todo-list/*/

    /* add food item function*/

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
    <label for="${newFood.id}" class="tick js-tick"> 
     <span> <input id="${newFood.id}" type= "checkbox"> ${newFood.text}</span> </label>
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


    /* Create List */
  
    var omnivore = "Chicken Breast \n Chicken Thighs \n Minced Meat \n Steak \n Turkey Steak \n Turkey Mince \n Meatballs \n Turkey Meatballs \n Fish \n Eggs \n Milk \n Cheese \n Cottage Cheese \n Cream Cheese \n Honey \n Coconut Milk \n Almond Milk \n Oat Milk \n Soya Milk \n Pasta \n Tomato Sauce \n Rice \n Mixed Nuts \n Dried Fruit \n Mushrooms \n Spinach \n Green Beans \n Peas \n Chickpeas \n Tomato Paste \n Chopped Tomatoes \n Tomatoes \n Rolled Oats \n Quinoa \n Barley \n Bulgar \n Onions \n Garlic \n Potatoes \n Sweet Potatoes \n Lentils \n Tempeh \n Tofu \n Nutritional Yeast \n Miso \n Broccoli \n Carrots \n Celery \n Cauliflower \n Cucumbers \n Bell Peppers \n Avocado \n Kale \n Asparagus \n Bread \n Tortillas \n Bagels \n Pitas \n Nut Butter \n Kidney Beans \n Pinto Beans";
    var vegiterian = "Eggs \n Milk \n Cheese \n Cottage Cheese \n Cream Cheese \n Honey \n Coconut Milk \n Almond Milk \n Oat Milk \n Soya Milk \n Pasta \n Tomato Sauce \n Rice \n Mixed Nuts \n Dried Fruit \n Mushrooms \n Spinach \n Green Beans \n Peas \n Chickpeas \n Tomato Paste \n Chopped Tomatoes \n Tomatoes \n Rolled Oats \n Quinoa \n Barley \n Bulgar \n Onions \n Garlic \n Potatoes \n Sweet Potatoes \n Lentils \n Tempeh \n Tofu \n Nutritional Yeast \n Miso \n Broccoli \n Carrots \n Celery \n Cauliflower\n Cucumbers \n Bell Peppers \n Avocado \n Kale \n Asparagus \n Bread \n Tortillas \n Bagels \n Pitas \n Nut Butter \n Kidney Beans \n Pinto Beans";
    var vegan = "Coconut Milk \n Almond Milk \n Oat Milk \n Soya Milk \n Pasta \n Tomato Sauce \n Rice \n Mixed Nuts \n Dried Fruit \n Mushrooms \n Spinach \n Green Beans \n Peas \n Chickpeas \n Tomato Paste \n Chopped Tomatoes \n Tomatoes \n Rolled Oats \n Quinoa \n Barley \n Bulgar \n Onions \n Garlic \n Potatoes \n Sweet Potatoes \n Lentils \n Tempeh \n Tofu \n Nutritional Yeast \n Miso \n Broccoli \n Carrots \n Celery \n Cauliflower\n Cucumbers \n Bell Peppers \n Avocado \n Kale \n Asparagus \n Bread \n Tortillas \n Bagels \n Pitas \n Nut Butter \n Kidney Beans \n Pinto Beans";

    var c1 = omnivore.split("\n");
    var c2 = vegiterian.split("\n");
    var c3 = vegan.split("\n");

    /* create list for pantry */

    $('select#dChoice').change(function () {
        /* alert if selection box empty */

        if ($(this).children(":selected").val() === "") {
            alert("Please choose your dietary Preference!");

            /* http://jsfiddle.net/JWPZh/2/ */
        } else if ($(this).children(":selected").val() === "omnivore") {
            for (var i = 0; i < c1.length; i++) {
                var input =  "<li><input type='checkbox' value= '" + i + "'/>" + c1[i] + "</li>";
                $("#pantry").append(input);
            }

        } else if ($(this).children(":selected").val() === "vegiterian") {
            for (var i = 0; i < c2.length; i++) {
                var input =  "<li><input type='checkbox' value= '" + i + "'/>" + c2[i] + "</li>";
                $("#pantry").append(input);
            }
        } else if ($(this).children(":selected").val() === "vegan") {
            for (var i = 0; i < c3.length; i++) {
                var input = "<li class = 'ui-widget-content' id = 'draggable'><input type='checkbox' value= '" + i + "'/>" + c3[i] + "</li>";
            
                $("#pantry").append(input);
            }
        }
    });


/* create list for meals */

var oMeal = "Lasagna \n Roast Chicken \n Curry \n Quiche \n Pasta Bake \n Chilli con Carne \n Risotto ";
var vNMeal = "Courgette Lasagna \n Falafels \n Vegetable Curry \n Vegiterian Quiche \n Pasta Bake \n Mushroom Risotto \n Veggie Burger ";
var vMeal = "Vegan Fajitas \n Falafels \n Vegetable Curry \n Cauliflower Stew \n Pasta Bake \n Sweet Potato Risotto \n Mushroom Burger ";

var m1 = oMeal.split("\n");
var m2 = vNMeal.split("\n")
var m3 = vMeal.split("\n")

$('select#dChoice').change(function () {
    /* alert if selection box empty */

   if ($(this).children(":selected").val() === "omnivore") {
        for (var i = 0; i < m1.length; i++) {
            var input =  "<label><input type='checkbox' value= '" + i + "'/>" + m1[i] + "</label>";
            $("#meal").append(input);
        }

    } else if ($(this).children(":selected").val() === "vegiterian") {
        for (var i = 0; i < m2.length; i++) {
            var input =  "<label><input type='checkbox' value= '" + i + "'/>" + m2[i] + "</label>";
            $("#meal").append(input);
        }
    } else if ($(this).children(":selected").val() === "vegan") {
        for (var i = 0; i < m3.length; i++) {
            var input = "<label class = 'meals'><input type='checkbox' value= '" + i + "'/>" + m3[i] + "</label>";
        
            $("#meal").append(input);
        }
    }
});


$("#block").draggable();



$("#draggable").draggable();

$("#droppable").droppable({
   
    drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          
    }

})

});