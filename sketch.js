var state = 0; // Zoom state counter

$(document).ready(function () {
    $('#container').on('click', function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        if (state == 0) {
            $('img').addClass('z1');
            state++;
        } else if (state == 1) {
            $('img').addClass('z2');
            state++;
        } else if (state == 2) {
            $('img').removeClass('z1 z2');
            state = 0;
        }
    });
});