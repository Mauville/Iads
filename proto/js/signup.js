function añadirusuario(username1, password1, email1, active1){

    var error = false;
    var counter = JSON.parse(localStorage.getItem('total-usuarios'));

    if(localStorage.getItem('total-usuarios')){

        for(var i=1; i <= localStorage.getItem('total-usuarios'); i++){
            let comp = JSON.parse(localStorage.getItem('user-'+i));
                        if(username1 == comp.username){
                                error = true;
                                break;
                        }
        }

        if(error){
            $('#username').css('border', '1px solid red');
            $('#error').text('Username already taken').fadeIn().delay(1500).fadeOut();  
            console.log('error');
            error = false;
    }else{
            counter++;
            localStorage.setItem('total-usuarios', counter);
            
            let user = {
                username: username1,
                email: email1,
                password: password1,
                active: active1
        };
        localStorage.setItem('user-' + counter, JSON.stringify(user));
        window.location.href = 'index.html';
    }

    }else{
            counter ++;
            localStorage.setItem('total-usuarios', 1);
            let user = {
                    username: username1,
                    email: email1,
                    password: password1,
                    active: active1
            };
            localStorage.setItem('user-' + counter, JSON.stringify(user));
            window.location.href = 'index.html';
}
}

function verifyuser(username, password){

    var comp = 0;
    var totusers = JSON.parse(localStorage.getItem('total-usuarios'));
        for(var j = 1; j <= totusers; j++){
            let persona = JSON.parse(localStorage.getItem('user-'+j));
        if((persona.username == username)&&(persona.password == password)){
                comp = 1;
                localStorage.setItem('logged-user', username);
                window.location.href = 'load.html';
            }
        }

        if(comp == 0){
            $('#username').css('border', '1px solid red');
            $('#bottomform').css('border', '1px solid red');
            $('#error').fadeIn().delay(1500).fadeOut();
        }
}