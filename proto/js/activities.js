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

function createActivity(icon, name, code) {

    var dot = "<div class='dot'></div>";
    var hyphen = "<div class='hyphen'></div>";
    precode = code.replace(/d/g, dot)
    postcode = precode.replace(/h/g, hyphen)
  
    var code = `
    <section>
      <a class="activity">
        <p>${icon}</p>
        <h2>${name}</h2>
        <h3>${postcode}</h3>
        <p class="cog">settings</p>
      </a>
      <div id="set1">
        <p><a href="knock.html">Change Pattern</a></p>
        <p id="redtext"><a href="404.html">Delete Activity</a></p>
      </div>
    </section>
    `
    return code;
  }

  show_activities();

function show_activities(){
    
        var acs = JSON.parse(localStorage.getItem('total-activities'));
        let logged = JSON.parse(localStorage.getItem('logged_user'));

        $('#activity-wrapper').empty();

        for(var i = 1; i<=acs; i++){
            let activity = JSON.parse(localStorage.getItem('activity-'+i));
                if (activity.owner_knocki == logged.knocki_used && activity.exists == true) {
                    
                    let icon = activity.image;
                    let name = activity.name;
                    let patterncode = activity.pattern;
                    let code = createActivity(icon, name, patterncode);

                    $('#activity-wrapper').append(code);
                }
        }
        var verifier = {
        name : 'null',
        image : 'null',
        }
        localStorage.setItem('new-activity', JSON.stringify(verifier));
}