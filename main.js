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

var option = "";
for (var i = 0; i < planets.length; i++) {
  option += `<option value='${planets[i][0]}'> ${planets[i][0]} </option>`;
}

document.getElementById("planets").innerHTML = option;

function calculateWeight(weight, planetName) {
  for (var i = 0; i < planets.length; i++) {
    if (planetName == planets[i][0]) {
      var newGravity = planets[i][1];
    }
  }
  return weight * newGravity;
}

function handleClickEvent(e) {
  var userWeight = document.getElementById("user-weight").value;
  var planetName = document.getElementById("planets").value;
  var result = calculateWeight(userWeight, planetName);
  document.getElementById("output").innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`;
}
