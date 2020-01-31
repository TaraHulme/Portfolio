// test for click on my picture
document.querySelector(".my_image").onclick = function(){
    alert('Hey, stop poking me!');
}

$('#button1').on('click', function(){
    $('.bio').toggle();
});

$('li').hover(function() {
    $(this).css('background', '#cdf8e3');
});

$('.hamburger').on('click', function(){
    // $('.menu').toggle();
    alert('you are a hamburger');
});

