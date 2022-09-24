//import * as Typed from "typed.js";

anime({
  targets: "#demo-svg path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeOutCirc",
  duration: 10000,
  loop: false,
});
anime({
  targets: ".p-bar",
  width: [0, 509.6], // -> from '28px' to '100%',
  easing: "easeInOutElastic",
  direction: "normal",
});
anime({
  targets: "#word-cover",
  scaleX: 0,

  delay: 3000,

  loop: false,
});

var app = document.getElementById("review");

var typewriter = new Typewriter(app, {
  delay: 10,
});

typewriter
  .typeString(
    "This album is a clear representation of Eminem as a character. It uses Eminem’s twisted, dark humor and is a complete 180 degrees from the goody two-shoes pop of the time. The album shows Eminem at his most emotionally vulnerable and Eminem’s master lyricism and rhymes. The album also has crazy hits like “Stan” and “The Real Slim Shady”, but at the same time, the lesser known songs are on the same par in regards to quality. The Marshall Mathers LP shows Eminem’s backstory and why he is so angry, while at the same time realizing that his album isn’t made to sell (“Steve Berman”). “Stan” is one of the most beautiful stories that Eminem is able to put on a track that follows the story of an erratic fan. “The Way I Am” really embodies Eminem’s anger and confidence and his own history. Eminem expresses his hate with society, pop culture, magazines, record labels, his family, and basically everything. “The Real Slim Shady” is a car classic and Eminem uses sarcasm and humor to criticize society and everyone around him. He also describes how he is the only “Slim Shady” and nobody can take his place. Eminem really shows how he isn’t afraid to diss anybody on this track (Will Smith, Christina Aguilera, MTV). “Marshall Mathers” is the most introspective song that explores how Eminem has risen to fame and people’s perception of him. This whole album is a great exploration of the character of Eminem and his emotions with regards to his fame."
  )

  .start();

var app2 = document.getElementById("fsong");

var typewriter2 = new Typewriter(app2, {
  delay: 100,
  autoStart: false,
});

typewriter2.typeString("Favorite Song: The Way I Am").start();

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
