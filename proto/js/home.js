//TODO Method for getting all knocki info from LS
//TODO Method for appending knocki html to page
//TODO method to refresh knocki things on load

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

    function show_user_knockis(){
        var knockis = JSON.parse(localStorage.getItem('total-knockis'));
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
            number: 0,
            exists: true
        }

        persona.knockis = p.knockis;

        localStorage.setItem('knocki-' + localStorage.getItem('total-knockis'), JSON.stringify(knocki));
        localStorage.setItem(persona.usernumber, JSON.stringify(p));
        localStorage.setItem('logged_user', JSON.stringify(persona));
        console.log("hola");
        window.location.href = 'home.html';
    }