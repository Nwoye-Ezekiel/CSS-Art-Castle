const handleButtonClick = (playAudio) => {
  if (playAudio) document.getElementsByTagName("audio")[0].play();

  document
    .getElementsByClassName("music-modal-wrapper")[0]
    .classList.add("fade-out-animation");
};

document.getElementById("no-button").addEventListener("click", () => {
  handleButtonClick(false);
});

document.getElementById("yes-button").addEventListener("click", () => {
  handleButtonClick(true);
});

document.addEventListener("DOMContentLoaded", () => {
  const rain = () => {
    let increment = 0, rain = "";

    for (let i = 0; i < 100; i++) {
      let rand = Math.floor(Math.random() * 101);
      increment += 1;

      let rainStyle = `
        left: ${increment}%;
        animation-delay: 0.${rand}s; 
        animation-duration: 0.5${rand}s;`;

      let dropStyle = `
        animation-delay: 0.${rand}s; 
        animation-duration: 0.5${rand}s;`;

      rain += `
        <div class="rain" style="${rainStyle}">
          <div class="drop" style="${dropStyle}"></div>
        </div>
        <div class="rain" style="${rainStyle.replace("left", "right")}">
          <div class="drop" style="${dropStyle}"></div>
        </div>`;
    }

    document.querySelector(".rain-wrapper").innerHTML = rain;
  };

  rain();
});
