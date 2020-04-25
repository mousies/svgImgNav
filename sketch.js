$(document).ready(function () {
    var state = 0; // Zoom state counter

    $('#container').on('dblclick', function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        var svgImg = $('img');

        if (state == 0) {
            svgImg.addClass('z1');
            state++;

        } else if (state == 1) {
            svgImg.addClass('z2');
            state++;

        } else if (state == 2) {
            svgImg.removeClass('z1 z2');
            state = 0;
        }
    });
});