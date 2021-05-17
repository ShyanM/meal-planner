

$(document).ready(function(){

    /* scroll to second section 
    created with the help of : https://www.youtube.com/watch?v=xYDgc05oQzU 
*/

$(".arrowButton").click(function(){
    $('html, body').animate ({
        scrollTop:$("#section2").offset().top
    })
})


$(".option").click(function(){
    $('html, body').animate ({
        scrollTop:$("#section3").offset().top
    })
})


var omnivore;
var vegiterian;
var vegan;



});

