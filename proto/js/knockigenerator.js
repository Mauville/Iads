/** Returns a formatted knocki device html
 * @param color  "white" or "blacc" to determine the color of the img
 * @param location  a string to display the place where the knocki is
 * @returns A string containing the html of the added Knocki Device
 */
function createDevice(color, location) {
  var code = `<section>
    <a href="activities.html" class="device">
      <img src="img/${color}.png" alt="knocki">
      <h2>${location}</h2>
      <h3>Status: <span>ONLINE</span></h3>
      <p>settings</p>
      <div id="set1">
        <p><a href="404.html">Activities</a></p>
        <p><a href="404.html">Configuration</a></p>
        <p id="redtext"><a href="404.html">Delete Device</a></p>
      </div>
    </a>
    `
  return code;
}