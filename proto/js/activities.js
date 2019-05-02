//TODO convert knocki stored code into bullets and dashes
//TODO fetch info from LS
//TODO method to refresh knocki things on load

$(document).ready(function () {

    $('.cog').click(function (e) { //button click class name is myDiv
        e.stopPropagation();
        console.log($(this).parent().parent());
        window.wew = $(this).parent().parent().find("#set1")
        $(window.wew).toggle();
    })

    $(function () {
        $(document).click(function () {
            $('#burger').hide(); //hide the button
            $(window.wew).hide();

        });
    });
}); 

if(localStorage.getItem('total-activities')==null){
    localStorage.setItem('total-activities', 0);
}

function show_activities(){

}