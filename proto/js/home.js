//TODO Method for getting all knocki info from LS
//TODO Method for appending knocki html to page
//TODO method to refresh knocki things on load

if (!(localStorage.getItem('logged_user'))) {
    window.location.href = 'index.html';    
}

let prueba = JSON.parse(localStorage.getItem('logged_user'));
    
if(prueba.username == 'null'){
    window.location.href = 'index.html';
  }


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
    if(localStorage.getItem('total-knockis')==null){
        localStorage.setItem('total-knockis', 0);
    }

    function createDevice(color, location, number) {
          var code = `<section id="knocki-${number}" class="device">
          <a href="activities.html" class="imagelink">
            <img src="img/${color}.png" alt="knocki">
          </a>
          <h2>${location}</h2>
          <h3>Status: <span>ONLINE</span></h3>
          <p class="wheel">settings</p>
          <div id="set1">
            <p><a href="index.html">Activities</a></p>
      
            <p><a href="404.html">Configuration</a></p>
            <p class="redtext">Delete Device</p>
          </div>
        </section>`;
        
        return code;
      }

    show_user_knockis();

    function show_user_knockis(){
        var knockis = JSON.parse(localStorage.getItem('total-knockis'));
        let logged = JSON.parse(localStorage.getItem('logged_user'));
        let user = JSON.parse(localStorage.getItem(logged.usernumber));

        user.knockis = logged.knockis;

        $('#knocki-wrapper').empty();

        for(var i = 1; i<=knockis; i++){
            let kprueb = JSON.parse(localStorage.getItem('knocki-'+i));
                if (kprueb.owner == logged.username && kprueb.exists == true) {
                    if (kprueb.number%2 == 0) {
                        let color = 'blacc';
                        let location = kprueb.place;
                        let number = kprueb.number;
                        let code = createDevice(color, location, number);
                        $('#knocki-wrapper').append(code);
                    }
                    else{
                        let color = 'white';
                        let location = kprueb.place;
                        let number = kprueb.number;
                        let code = createDevice(color, location, number);
                        $('#knocki-wrapper').append(code);
                    }
                }
        }
        localStorage.setItem('logged_user', JSON.stringify(logged)); 
    }

    function add_knocki(place1){
        localStorage.setItem('total-knockis', JSON.parse(localStorage.getItem('total-knockis'))+1);

        let persona = JSON.parse(localStorage.getItem('logged_user'));

        let p = JSON.parse(localStorage.getItem(persona.usernumber));
        p.knockis = p.knockis + 1;

        let knocki = {
            owner: persona.username,
            place: place1,
            status: 'on',
            number: p.knockis,
            exists: true
        }

        persona.knockis = p.knockis;

        localStorage.setItem('knocki-' + localStorage.getItem('total-knockis'), JSON.stringify(knocki));
        localStorage.setItem(persona.usernumber, JSON.stringify(p));
        localStorage.setItem('logged_user', JSON.stringify(persona));
        window.location.href = 'home.html';
        
    }

    $('.redtext').on('click', function(){
        var parent = $(this).parent().parent();
        var id = $(parent).attr('id');
        delete_knocki(id);
    });

    function delete_knocki(id){
        $('#'+id).remove();

        let del = JSON.parse(localStorage.getItem(id));
        del.exists = false;
        del.status = 'off'
        localStorage.setItem(id, JSON.stringify(del));
    }