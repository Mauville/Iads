// Add some prompt for device name/location
// Add a new knocki device to LS method
$(document).ready(function () {

    // Key generator
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    //Assign a random key to each knocki
    $("#key").html(makeid(8));


    //Make click on anything but popup hide the popup
    $('#confirm').click(function (e) {
        e.stopPropagation();
    })

    $("#confirm").on("click", function () {
        $('#popup').toggle();
    });
});