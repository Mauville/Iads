//TODO implement knocker getter method
//TODO implement local storage rewriter

$(document).ready(function () {
    var dot = "<div class='dot'></div>";
    var hyphen = "<div class='hyphen'></div>";



    var tot = 0;
    var tot2 = 0;
    var pattern = "";
    var pattern2 = "";

    var touchArea = document.getElementById('wrapper');
    var myRegion = ZingTouch.Region(touchArea);

    var gest = new ZingTouch.Tap({
        maxDelay: 2000,
        numInputs: 1,
        tolerance: 10
    });

    myRegion.bind(touchArea, gest, function (e) {
        var num = e.detail.interval;

        tot++;

        if (tot <= 10) {
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

    });
    }
}