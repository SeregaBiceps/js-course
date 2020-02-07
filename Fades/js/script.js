$(document).ready(function() {
    $('.main_btna').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown();
    });
    $('a[href="#sheldure"]').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown();
    });
    $('.main_btn').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown();
    });

    $('.contactform_select').on('submit', function(event) {
        event.preventDefault();
        $('.overlay').fadeToggle('slow');
        $('.modal').slideUp();
    });
    $('.close').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideUp();
    });
});