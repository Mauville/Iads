//TODO implement knocker getter method
//TODO implement local storage rewriter

$(document).ready(function () {
    var dot = "<div class='dot'></div>";
    var hyphen = "<div class='hyphen'></div>";


    var tot = 0;
    var touchArea = document.getElementById('wrapper');
    var myRegion = ZingTouch.Region(touchArea);
    var pattern = ""

    var gest = new ZingTouch.Tap({
        maxDelay: 2000,
        numInputs: 1,
        tolerance: 10
    });

    myRegion.bind(touchArea, gest, function (e) {
        var num = e.detail.interval;

        tot++;

        if (tot <= 5) {
            if (num < 170) {
                //tap
                $('.store').append(dot);
                pattern += "d";
            }
            else {
                //silence
                $('.store').append(hyphen);
                pattern += "h";
            }
        }
        console.log(pattern)

    });
    $("#taparea").on("tap", function (e) {
        e.preventDefault();
        $('#gesture').append(dot);
    });

    $("#taparea").on("taphold", function (e) {
        e.preventDefault();
        $('#gesture').append(hyphen);
    });
});