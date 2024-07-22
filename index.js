const handleButtonClick = (playAudio) => {
  if (playAudio) document.getElementById("myAudio").play();
  document.getElementById("musicModal").classList.add("fade-out");
};

document.getElementById("yesButton").addEventListener("click", () => {
  handleButtonClick(true);
});

document.getElementById("noButton").addEventListener("click", () => {
  handleButtonClick(false);
});

document.addEventListener("DOMContentLoaded", () => {
  const makeItRain = () => {
    let rainElements = document.querySelectorAll(".rain");

    rainElements.forEach(function (rain) {
      rain.innerHTML = "";
    });

    let increment = 0;
    let drops = "";
    let backDrops = "";

    for (let i = 0; i < 100; i++) {
      let randoHundo = Math.floor(Math.random() * 98) + 1;
      let randoFiver = Math.floor(Math.random() * 4) + 2;
      increment += randoFiver;

      let dropStyle = `
        left: ${increment}%; 
        bottom: ${randoFiver * 2 + 99}%; 
        animation-delay: 0.${randoHundo}s; 
        animation-duration: 0.5${randoHundo}s;`;

      let stemStyle = `
        animation-delay: 0.${randoHundo}s; 
        animation-duration: 0.5${randoHundo}s;`;

      drops += `
        <div class="drop" style="${dropStyle}">
          <div class="stem" style="${stemStyle}"></div>
        </div>`;

      backDrops += `
        <div class="drop" style="${dropStyle.replace("left", "right")}">
          <div class="stem" style="${stemStyle}"></div>
        </div>`;
    }

    document.querySelector(".rain.front-row").innerHTML = drops;
    document.querySelector(".rain.back-row").innerHTML = backDrops;
  };

  makeItRain();
});
