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

$('#accept').on('click', function(){
    let activity = localStorage.getItem('new-activity');
    add_activity(activity);
});

function add_activity(activity1){
    localStorage.setItem('total-activities', JSON.parse(localStorage.getItem('total-activities'))+1);

    let log_user = JSON.parse(localStorage.getItem('logged_user'));
    let knocki = JSON.parse(localStorage.getItem(log_user.knocki_used));
    
    knocki.activities = knocki.activities + 1;

    let activity = {
        owner: knocki.owner,
        place: knocki.place,
        activity: activity1,
        pattern: ''
    }

    localStorage.setItem('activity-'+ localStorage.getItem('total-activities'), JSON.stringify(activity));
    window.location.href = 'activities.html';
}
