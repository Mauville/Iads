/** 
 * DOES NOT WORK YET
 * Checks username and password against local storage entries.
 * 
* Local storage must have an array of users, each with an array, containing the 
* entries username and password. Return codes are 0 for success, 1 for incorrect user
* 2 for incorrect password (implies !1) and 3 for error
*/
function checkAuth(username, password) {

    var userlist = store.get("usrlist");
    // Again, how to  access a specific key
    var databaseUser = userlist.username;
    var userpass = userlist.username.password;

    var state = 3;

    if (databaseUser == username) {
        if (userpass = password) {
            state = 0;
        }
        else {
            state = 2;
        }
    }
    else {
        state = 1;
    }
    return state;
}
// TODO function to listen for button click
//TODO remove link and direct to page only on approval from function