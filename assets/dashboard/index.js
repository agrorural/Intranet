import '../styles/app.scss';

import 'bootstrap';

const Chart = require('chart.js');
const Chartkick = require('chartkick');

Chartkick.options = {
    colors: ['#7daf28', '#f5d269', '#8c6437', '#b48caf', '#3ccdcd']
}

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

    $('.datagrid').DataTable({
        language: {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando del _START_ al _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        responsive: true
    });

});

new Chartkick.LineChart("multiple-line", [{ "name": "Sobretiempo", "data": { "2013-02-10": 3, "2013-02-17": 3, "2013-02-24": 3, "2013-03-03": 1, "2013-03-10": 4, "2013-03-17": 3, "2013-03-24": 2, "2013-03-31": 3 } }, { "name": "Tardanzas", "data": { "2013-02-10": 0, "2013-02-17": 0, "2013-02-24": 0, "2013-03-03": 0, "2013-03-10": 2, "2013-03-17": 1, "2013-03-24": 0, "2013-03-31": 0 } }]);