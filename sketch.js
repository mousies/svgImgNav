$(document).ready(function () {
    var state = 0; // Zoom state counter

    $('#container').on('click', function (e) {

        var zDiv = $('.z0');

        if (state == 0) {
            zDiv.addClass('z1');
            state++;

        } else if (state == 1) {
            zDiv.removeClass('z1').addClass('z2');
            state++;

        } else if (state == 2) {
            zDiv.removeClass('z2');
            state = 0;
        }

        setTimeout(() => {
            window.scroll({
                left: e.pageX,
                top: e.pageY,
                behavior: "smooth"
            });
        }, 400);
    });
})