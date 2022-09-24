//import * as Typed from "typed.js";

anime({
  targets: "#demo-svg path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeOutCirc",
  duration: 6000,
  loop: false,
});
anime({
  targets: ".p-bar",
  width: [0, 494], // -> from '28px' to '100%',
  easing: "easeInOutElastic",
  direction: "normal",
});

anime({
  targets: "#word-cover",
  scaleX: 0,
  duration: 100,
  loop: false,
});
var app = document.getElementById("review");

var typewriter = new Typewriter(app, {
  delay: 10,
});

typewriter
  .typeString(
    "Kendrick Lamar puts forth a cohesive, emotional sensation with his fourth studio album, DAMN. The album is a great representation of Kendrick Lamar’s storytelling and vivid imagery: it isn’t surprising at all that DAMN won a Pulitzer Prize. Kendrick spits on the mic fast and powerfully on tracks like “HUMBLE” and “DAMN”, but also speaks softly on songs like “PRIDE” and “LOVE”, showcasing his versatility. Kendrick is able to both talk about social injustice and problems and talk about internal problems and new insights. He puts forth existential thoughts that are unexpected, like “Y’all know, what happens on Earth stays on Earth.” The album throughout shows how Kendrick Lamar is facing internal conflicts, and the album feels like he is talking to himself at certain points. Kendrick describes how he wants to be humble, how hard it is to be humble, how he would rather be confident than humble, and he doesn’t owe being humble to anyone. The song “ELEMENT” opens up some huge background on Kendrick and shows how he wants to help “Black” artists, but not “wack” artists. “FEEL” is a masterpiece of a song that is a gateway to all of Kendrick’s thoughts and debates inside his own head. “XXX” tackles social issues, while “DUCKWORTH” explains how Kendrick was able to rise to fame through his father’s luck. "
  )

  .start();

var app2 = document.getElementById("fsong");

var typewriter2 = new Typewriter(app2, {
  delay: 100,
  autoStart: false,
});

typewriter2.typeString("Favorite Song: ELEMENT  .").start();

var button = document.querySelector(".back-arrow");

function animateButton(scale, duration, elasticity, radius, rot) {
  anime({
    targets: button,
    borderRadius: [0, radius],
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    rotateZ: rot,
  });
}

function enterButton() {
  animateButton(1.4, 400, 400, 50, -5);
}
function leaveButton() {
  animateButton(1.0, 400, 300, 0, 0);
}

button.addEventListener("mouseenter", enterButton, false);
button.addEventListener("mouseleave", leaveButton, false);

document.getElementById("barrow").onclick = function () {
  location.href = "../index.html";
};
