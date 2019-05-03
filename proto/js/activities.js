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

function screename(){
    let user = JSON.parse(localStorage.getItem('logged_user'));
    let knocki = JSON.parse(localStorage.getItem(user.knocki_used));
$('#changingtext').text(knocki.place);
}

function createActivity(icon, name, code, id) {

    var dot = "<div class='dot'></div>";
    var hyphen = "<div class='hyphen'></div>";
    precode = code.replace(/d/g, dot)
    postcode = precode.replace(/h/g, hyphen)
  
    var code = `
    <section id="${id}">
      <a class="activity">
        <p>${icon}</p>
        <h2>${name}</h2>
        <h3>${postcode}</h3>
        <p class="cog">settings</p>
      </a>
      <div id="set1">
        <p><a href="knock.html">Change Pattern</a></p>
        <p id="redtext"><a>Delete Activity</a></p>
      </div>
    </section>
    `
    return code;
  }

  function createActivity_imgexception(icon, name, code, id) {

    var dot = "<div class='dot'></div>";
    var hyphen = "<div class='hyphen'></div>";
    precode = code.replace(/d/g, dot)
    postcode = precode.replace(/h/g, hyphen)
  
    var code = `
    <section id="${id}">
      <a class="activity">
        <p><img class="exception" src="${icon}"</p>
        <h2>${name}</h2>
        <h3>${postcode}</h3>
        <p class="cog">settings</p>
      </a>
      <div id="set1">
        <p><a href="knock.html">Change Pattern</a></p>
        <p id="redtext"><a>Delete Activity</a></p>
      </div>
    </section>
    `
    return code;
  }

  screename();
  show_activities();

function show_activities(){
    
        var acs = JSON.parse(localStorage.getItem('total-activities'));
        let logged = JSON.parse(localStorage.getItem('logged_user'));

        $('#activity-wrapper').empty();

        for(var i = 1; i<=acs; i++){
            let activity = JSON.parse(localStorage.getItem('activity-'+i));
                if (activity.owner_knocki == logged.knocki_used && activity.exists == true) {
                    var test = 0;

                    if(activity.name == 'Lights'){
                        let icon = 'img/foco.svg';
                        let name = activity.name;
                        let id = activity.id;
                        let patterncode = activity.pattern;
                        let code = createActivity_imgexception(icon, name, patterncode, id);  
                        test ++;

                        $('#activity-wrapper').append(code);
                    }

                    if(activity.name == 'Blinds'){
                        let icon = 'img/persianas.svg';
                        let name = activity.name;
                        let id = activity.id;
                        let patterncode = activity.pattern;
                        let code = createActivity_imgexception(icon, name, patterncode, id); 
                        test ++; 

                        $('#activity-wrapper').append(code);
                    }

                    if(activity.name == 'Mood'){
                        let icon = 'img/love.png';
                        let name = activity.name;
                        let id = activity.id;
                        let patterncode = activity.pattern;
                        let code = createActivity_imgexception(icon, name, patterncode, id); 
                        test ++; 

                        $('#activity-wrapper').append(code);
                    }

                    if(test == 0){
                    let icon = activity.image;
                    let name = activity.name;
                    let id = activity.id;
                    let patterncode = activity.pattern;
                    let code = createActivity(icon, name, patterncode, id);
                    test = 0;

                    $('#activity-wrapper').append(code);
                    }
                }
        }
        var verifier = {
        name : 'null',
        image : 'null',
        }
        localStorage.setItem('new-activity', JSON.stringify(verifier));
}

$('#redtext a').on('click', function(){
    var parent = $(this).parent().parent().parent();
    var id = $(parent).attr('id');
    console.log(id);
    delete_activity(id);
});

function delete_activity(id){
    $('#'+id).remove();
    console.log(id);

    let del = JSON.parse(localStorage.getItem(id));
    del.exists = false
    del.status = 'off'
    localStorage.setItem(id, JSON.stringify(del));
}