/**
 * Returns a formatted activity html 
 * @param {String} icon A material design ligature name. https://material.io/tools/icons/?style=baseline
 * @param {String} name The name to be displayed in an activity
 * @param {String} code The five character knock code represented by "d" and "h"
 */
function createActivity(icon, name, code) {

  var dot = "<div class='dot'></div>";
  var hyphen = "<div class='hyphen'></div>";
  precode = code.replace("d", dot)
  postcode = precode.replace("h", hyphen)

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