//TODO Method for getting all knocki info from LS
//TODO Method for appending knocki html to page
//TODO method to refresh knocki things on load
$(document).ready(function () {

    $('#more').click(function (e) { //button click class name is myDiv
        e.stopPropagation();
    })

    $(function () {
        $(document).click(function () {
            $('#burger').hide(); //hide the button

        });
    });


    $("#more").on("click", function () {
        $('#burger').toggle();
    });
});