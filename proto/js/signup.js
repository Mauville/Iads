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