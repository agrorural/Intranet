import '../styles/app.scss';

import 'bootstrap';

const Chartkick = require('chartkick');

//AMD
import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-responsive';
import 'datatables.net-responsive-bs4';


$(function() {
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

    $('#example').DataTable({
        responsive: true
    });

});

new Chartkick.LineChart("chart-1", { "2013-02-10 00:00:00 -0800": 11, "2013-02-11 00:00:00 -0800": 6 });