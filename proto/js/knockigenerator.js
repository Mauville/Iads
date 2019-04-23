/** Returns a formatted knocki device html
 * @param An object containing the following strings {location, color}. Color should be either "white" or "blacc"
 * @returns A string containing the html of the added Knocki Device
 */
function createDevice (color, location){
  var code = `<section>
    <a href="activities.html" class="device">
      <img src="img/${color}.png" alt="knocki">
      <h2>${location}</h2>
      <h3>Status: <span>ONLINE</span></h3>
      <p>edit</p>
    </a>
    `
    return code;
}