import '../styles/app.scss';

import 'bootstrap';

$(function() {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
})