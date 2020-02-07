$(document).ready(function() {
    function modalFadeIn (attr) {
        $(attr).on('click', function() {
            $('.overlay').fadeToggle('slow');
            $('.modal').slideDown();
        });
    }
    function modalFadeOut (attr, act) {
        $(attr).on(act, function(event) {
            event.preventDefault();
            $('.overlay').fadeToggle('slow');
            $('.modal').slideUp();
        });
    }
    modalFadeIn('.main_btna');
    modalFadeIn('a[href="#sheldure"]');
    modalFadeIn('.main_btn');
    modalFadeOut('.contactform_select', 'submit');
    modalFadeOut('.close', 'click');
});