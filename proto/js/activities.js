//TODO convert knocki stored code into bullets and dashes
//TODO fetch info from LS
//TODO method to refresh knocki things on load

/**
 * Returns a formatted activity html 
 * @param {String} icon A material design ligature name. https://material.io/tools/icons/?style=baseline
 * @param {String} name The name to be displayed in an activity
 * @param {String} code The knock code represented by bullets ("&bull;") and dashes "-"
 */
function createActivity(icon, name, code) {
    var code = `<section>
    <a href="knock.html" class="activity">
      <p>${icon}</p>
      <h2>${name}</h2>
      <h3>${code}</h3>
    </a>
    `
    return code;
}