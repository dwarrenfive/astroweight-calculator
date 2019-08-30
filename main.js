// Write your JavaScript code here!
var planets = [
  ["Pluto", 0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9]
];
// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
var option = "";
for (var i = 0; i < planets.length; i++) {
  option += `<option value='${planets[i][0]}'> ${planets[i][0]} </option>`;
}

document.getElementById("planets").innerHTML = option;

function calculateWeight(weight, planetName) {
  // 2. Write the code to return the correct weight
  for (var i = 0; i < planets.length; i++) {
    if (planetName == planets[i][0]) {
      var newGravity = planets[i][1];
    }
  }
  return weight * newGravity;
}

function handleClickEvent(e) {
  // 3. Create a variable called userWeight and assign the value of the user's weight.
  var userWeight = document.getElementById("user-weight").value;
  // 4. Create a variable called planetName and assign the name of the selected
  //    planet from the drop down.
  var planetName = document.getElementById("planets").value;
  // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = calculateWeight(userWeight, planetName);
  // 6. Write code to display the message shown in the screenshot.
  document.getElementById(
    "output"
  ).innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`;
}
// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
