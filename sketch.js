$(document).ready(function () {
    var state = 0; // Zoom state counter

    $('#container').on('dblclick', function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        var zDiv = $('.z0');

        if (state == 0) {
            zDiv.addClass('z1');
            state++;

        } else if (state == 1) {
            zDiv.addClass('z2');
            state++;

        } else if (state == 2) {
            zDiv.removeClass('z1 z2');
            state = 0;
        }
    });
})