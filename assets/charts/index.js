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
        // console.log('Esta enfocado');
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

    $('#myTable').DataTable({
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
        }
    });


});

new Chartkick.LineChart("line", { "2013-02-10": 11, "2013-02-11": 6, "2013-02-12": 3, "2013-02-13": 2, "2013-02-14": 5, "2013-02-15": 3, "2013-02-16": 8, "2013-02-17": 6, "2013-02-18": 6, "2013-02-19": 12, "2013-02-20": 5, "2013-02-21": 5, "2013-02-22": 3, "2013-02-23": 1, "2013-02-24": 10, "2013-02-25": 1, "2013-02-26": 3, "2013-02-27": 2, "2013-02-28": 3, "2013-03-01": 2, "2013-03-02": 8 }, { download: true });
new Chartkick.PieChart("pie", [
    ["Blueberry", 44],
    ["Strawberry", 23],
    ["Banana", 22],
    ["Apple", 21],
    ["Grape", 13]
], { download: "pie" });
new Chartkick.PieChart("donut", [
    ["Blueberry", 44],
    ["Strawberry", 23],
    ["Banana", 22],
    ["Apple", 21],
    ["Grape", 13]
], { donut: true });
new Chartkick.ColumnChart("column", [
    ["0", 32],
    ["1", 46],
    ["2", 28],
    ["3", 21],
    ["4", 20],
    ["5", 13],
    ["6", 27]
]);
new Chartkick.BarChart("bar", [
    ["0", 32],
    ["1", 46],
    ["2", 28],
    ["3", 21],
    ["4", 20],
    ["5", 13],
    ["6", 27]
]);
new Chartkick.AreaChart("area", { "2013-02-10": 11, "2013-02-11": 6, "2013-02-12": 3, "2013-02-13": 2, "2013-02-14": 5, "2013-02-15": 3, "2013-02-16": 8, "2013-02-17": 6, "2013-02-18": 6, "2013-02-19": 12, "2013-02-20": 5, "2013-02-21": 5, "2013-02-22": 3, "2013-02-23": 1, "2013-02-24": 10, "2013-02-25": 1, "2013-02-26": 3, "2013-02-27": 2, "2013-02-28": 3, "2013-03-01": 2, "2013-03-02": 8 });
new Chartkick.ScatterChart("scatter", [
    [174.0, 80.0],
    [176.5, 82.3],
    [180.3, 73.6],
    [167.6, 74.1],
    [188.0, 85.9]
]);
new Chartkick.BubbleChart("bubble", [
    [174.0, 80.0, 1],
    [176.5, 82.3, 2],
    [180.3, 73.6, 3],
    [167.6, 74.1, 6],
    [188.0, 85.9, 2]
]);

new Chartkick.LineChart("multiple-line", [{ "name": "Workout", "data": { "2013-02-10": 3, "2013-02-17": 3, "2013-02-24": 3, "2013-03-03": 1, "2013-03-10": 4, "2013-03-17": 3, "2013-03-24": 2, "2013-03-31": 3 } }, { "name": "Go to concert", "data": { "2013-02-10": 0, "2013-02-17": 0, "2013-02-24": 0, "2013-03-03": 0, "2013-03-10": 2, "2013-03-17": 1, "2013-03-24": 0, "2013-03-31": 0 } }, { "name": "Wash face", "data": { "2013-02-10": 0, "2013-02-17": 1, "2013-02-24": 0, "2013-03-03": 0, "2013-03-10": 0, "2013-03-17": 1, "2013-03-24": 0, "2013-03-31": 1 } }, { "name": "Call parents", "data": { "2013-02-10": 5, "2013-02-17": 3, "2013-02-24": 2, "2013-03-03": 0, "2013-03-10": 0, "2013-03-17": 1, "2013-03-24": 1, "2013-03-31": 0 } }, { "name": "Eat breakfast", "data": { "2013-02-10": 3, "2013-02-17": 2, "2013-02-24": 1, "2013-03-03": 0, "2013-03-10": 2, "2013-03-17": 2, "2013-03-24": 3, "2013-03-31": 0 } }]);
new Chartkick.BarChart("multiple-bar", [{
    name: "Series A",
    data: [
        ["0", 32],
        ["1", 46],
        ["2", 28],
        ["3", 21],
        ["4", 20],
        ["5", 13],
        ["6", 27]
    ]
}, {
    name: "Series B",
    data: [
        ["0", 32],
        ["1", 46],
        ["2", 28],
        ["3", 21],
        ["4", 20],
        ["5", 13],
        ["6", 27]
    ]
}], { max: 80 });

new Chartkick.AreaChart("multiple-area", [{ "name": "Workout", "data": { "2013-02-10": 3, "2013-02-17": 3, "2013-02-24": 3, "2013-03-03": 1, "2013-03-10": 4, "2013-03-17": 3, "2013-03-24": 2, "2013-03-31": 3 } }, { "name": "Go to concert", "data": { "2013-02-10": 0, "2013-02-17": 0, "2013-02-24": 0, "2013-03-03": 0, "2013-03-10": 2, "2013-03-17": 1, "2013-03-24": 0, "2013-03-31": 0 } }, { "name": "Wash face", "data": { "2013-02-10": 0, "2013-02-17": 1, "2013-02-24": 0, "2013-03-03": 0, "2013-03-10": 0, "2013-03-17": 1, "2013-03-24": 0, "2013-03-31": 1 } }, { "name": "Call parents", "data": { "2013-02-10": 5, "2013-02-17": 3, "2013-02-24": 2, "2013-03-03": 0, "2013-03-10": 0, "2013-03-17": 1, "2013-03-24": 1, "2013-03-31": 0 } }, { "name": "Eat breakfast", "data": { "2013-02-10": 3, "2013-02-17": 2, "2013-02-24": 1, "2013-03-03": 0, "2013-03-10": 2, "2013-03-17": 2, "2013-03-24": 3, "2013-03-31": 0 } }]);