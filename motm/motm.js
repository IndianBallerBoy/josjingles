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
  width: [0, 499], // -> from '28px' to '100%',
  easing: "easeInOutElastic",
  direction: "normal",
});

anime({
  targets: "#word-cover",
  scaleX: 0,

  delay: 1300,

  loop: false,
});
var app = document.getElementById("review");

var typewriter = new Typewriter(app, {
  delay: 10,
});

typewriter
  .typeString("COMING SOON")

  .start();

var app2 = document.getElementById("fsong");

var typewriter2 = new Typewriter(app2, {
  delay: 100,
  autoStart: false,
});

typewriter2.typeString("Favorite Song: Pursuit of Happiness").start();

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
