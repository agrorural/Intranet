import '../styles/app.scss';

import 'bootstrap';

$(function() {
    console.log("ready!");
    $('#txtSearch').focus(function() {
        $('.header').addClass("searching");
        $(this).prev().removeClass("fa-search");
        $(this).prev().addClass("fa-chevron-left");
        console.log('Esta enfocado');
    }).blur(function() {
        $('.header').removeClass("searching")
        $(this).prev().addClass("fa-search");
        $(this).prev().removeClass("fa-chevron-left");
    });

    $('input.form-control').blur(function() {
        let tmpval = $(this).val();
        if (tmpval == '') {
            $(this).parent('.form-group').addClass('empty');
            $(this).parent('.form-group').removeClass('not-empty');
        } else {
            $(this).parent('.form-group').addClass('not-empty');
            $(this).parent('.form-group').removeClass('empty');
        }
    });
    $('#sidebarCollapse').click(function() {
        $('nav#sidebar').toggleClass('active');
    });
});