import '../styles/app.scss';

import 'bootstrap';

$(function() {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
    let txtUser = $('input#txtUser').val();
    if (txtUser != '') {
        $('input#txtUser').addClass('evaluated');
        console.log(txtUser);
    }
});

(function() {
    'use strict';

    window.addEventListener('load', function() {
        var form = document.getElementById('needs-validation');
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();