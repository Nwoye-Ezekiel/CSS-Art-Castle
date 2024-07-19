document.addEventListener("DOMContentLoaded", function () {
  var makeItRain = function () {
    // Clear out everything
    var rainElements = document.querySelectorAll(".rain");
    rainElements.forEach(function (rain) {
      rain.innerHTML = "";
    });

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
      // Random numbers for various randomizations
      var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      increment += randoFiver;

      // Add in a new raindrop with various randomizations to certain CSS properties
      drops +=
        '<div class="drop" style="left: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';

      backDrops +=
        '<div class="drop" style="right: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';
    }

    var frontRow = document.querySelector(".rain.front-row");
    var backRow = document.querySelector(".rain.back-row");
    frontRow.innerHTML = drops;
    backRow.innerHTML = backDrops;
  };

  makeItRain();
});
