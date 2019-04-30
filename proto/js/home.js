//TODO Method for getting all knocki info from LS
//TODO Method for appending knocki html to page
//TODO method to refresh knocki things on load

$(document).ready(function () {

    $('#more').click(function (e) { //button click class name is myDiv
        e.stopPropagation();
        $('#burger').toggle();
    })

    $('.wheel').click(function (e) { //button click class name is myDiv
        e.stopPropagation();
        window.wew = $(this).parent().find("#set1")
        $(window.wew).toggle();
    })

    $(function () {
        $(document).click(function () {
            $('#burger').hide(); //hide the button
            $(window.wew).hide();

        });
    });
}); 
    // $('.wheel').click(function (w) {
    //     w.stopPropagation();
    // });
    // $(function () {
    //     $(document).click(function () {
    //         $('#burger').hide(); //hide the button
    //     });

    //     $("#more").on("click", function () {
    //         $('#burger').toggle();
    //     })

    //     $('.wheel').on('click', function () {
    //     })
    // });