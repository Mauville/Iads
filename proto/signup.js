/**
 * NOT YET READY
 * Adds user to LS with proper data sanitation
 * @param {string} email 
 * @param {string} password 
 * @param {string} username 
 * Returns 0 if successful, 1 if data validation failed
 */
function addUser(email, password, username) {
    if (validateData(username) == 0) {
        var lbObject = store.get("usrlist");
        store.update(lbObject, function () {
            //What a mystery this library is. How to access a specific key?
            lbObject.username =
                {
                    email: email,
                    password: password,
                    username: username,
                    knocki : {
                        name : "example",
                        status : "Online",
                        location : "Location"
                    }
                };
        });
        return 0;
    }
    else{
        return 1;
    }
};

/**
 * Checks for collisions in Local Storage
 * @param {string} username 
 * Returns 0 for user not in LS
 */
function validateData(username) {
    var lbObject = store.get("usrlist");
    // if user not in LS
    if (store.get(lbObject.username) == undefined) {
        return 0;
    }
    //TODO check if mail in ls, return prompt for password recovery?

};


// if (store.get("totalBulbs") == undefined) {
//     store.set("totalBulbs", 0);
// }
// else {
//     //TODO: Check if we have any lb's and add them...
// }

// $('#addLightbulb').on('click', function () {
//     store.set("totalBulbs", store.get("totalBulbs") + 1);

//     store.set("lightbulb-" + store.get("totalBulbs"), {
//         state: "OFF", location: $('#locationInput').val()
//     });

//     displayBulbs();

// });

// function displayBulbs() {
//     var tot = store.get("totalBulbs");

//     $('#container').empty();

//     for (i = 1; i <= tot; i++) {
//         var lb = store.get("lightbulb-" + i);

//         var state = lb.state;

//         $('#container').append(`
//                                             <div class="foco">
//                                                 <div class="bulb ${state}"></div>
//                                                 <div class="switch ${state}" data-lb="${"lightbulb-" + i}"></div>
//                                                 <h1>${lb.location}</h1>
//                                             </div>
//                                             `);
//     }
// }

// displayBulbs();

// $('#container').on('click', '.switch', function () {
//     var lb = $(this).attr('data-lb');

//     var lbObject = store.get(lb);

//     if (lbObject.state == "OFF") {
//         //Turn the Bulb ON
//         store.update(lb, function (lbObject) {
//             lbObject.state = "ON";
//         });
//     }
//     else {
//         //Turn the Bulb OFF
//         store.update(lb, function (lbObject) {
//             lbObject.state = "OFF";
//         });
//     }


//     displayBulbs();

// })


