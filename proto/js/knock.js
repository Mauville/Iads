//TODO implement knocker getter method
//TODO implement local storage rewriter
if (!(localStorage.getItem('logged_user'))) {
    window.location.href = 'index.html';    
}

function screename(){
    let activity = JSON.parse(localStorage.getItem('new-activity'));
$('#changingtext').text(activity.name + ' - Pattern');
}

screename();

var masterpattern = '';

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

        if (tot <= 4) {
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
        masterpattern = pattern;

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
    let info = JSON.parse(localStorage.getItem('new-activity'));
    let conditional = info.name;

    if(conditional == 'null'){
        let logged = JSON.parse(localStorage.getItem('logged_user'));
        let activity = JSON.parse(localStorage.getItem(logged.activity_used));
        activity.pattern = masterpattern;
        localStorage.setItem(logged.activity_used, JSON.stringify(activity));
        window.location.href = 'activities.html';
    }
    else{
        let activity = JSON.parse(localStorage.getItem('new-activity'));
        add_activity(activity.name, activity.image);
    }
});

function add_activity(activity1, img){
    localStorage.setItem('total-activities', JSON.parse(localStorage.getItem('total-activities'))+1);

    let log_user = JSON.parse(localStorage.getItem('logged_user'));
    let knocki = JSON.parse(localStorage.getItem(log_user.knocki_used));
    
    knocki.activities = knocki.activities + 1;

    let activity = {
        owner_knocki: log_user.knocki_used,
        id: 'activity-' + localStorage.getItem('total-activities'),
        name: activity1,
        exists: true,
        pattern: masterpattern,
        image: img
    }

    localStorage.setItem('activity-'+ localStorage.getItem('total-activities'), JSON.stringify(activity));
    localStorage.setItem(log_user.knocki_used, JSON.stringify(knocki));
    window.location.href = 'activities.html';
}

$('.materialIcon').on('click', function (){
    let info = JSON.parse(localStorage.getItem('new-activity'));
    let conditional = info.name;

    if(conditional == 'null'){
        window.location.href = 'activities.html';
    }
    else{
        window.location.href = 'newactivity.html';
    }
});

