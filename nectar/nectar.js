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
  width: [0, 457.6], // -> from '28px' to '100%'(520px),
  easing: "easeInOutElastic",
  direction: "normal",
});
anime({
  targets: "#word-cover",
  scaleX: 0,

  loop: false,
});
var app = document.getElementById("review");

var typewriter = new Typewriter(app, {
  delay: 10,
});

typewriter
  .typeString(
    "Joji creates a melancholic, reflective vibe with his second studio album, Nectar. Every single song in the album makes the listener feel as if they are flying in the rain. The opening track “Ew” makes use of a good beat and piano in order to accentuate Joji’s relationship with love. Joji shares how he is afraid of relationships because of having to eventually break up and fall apart. Each break-up has Joji questioning his self-worth and respect. “MODUS” is another great track that again has the same vibe as “Ew”, but talks about the struggles in being in the music industry. The chorus on this track is remarkable and Joji’s singing abilities are on full display. “Tick Tock”, the third song on the album, uses percussion to really make the song feel like a clock that is ticking. Joji talks about the pain of change throughout relationships and life. “Gimme Love” is one of the best songs on the album that uses an EDM beat in order to show Joji’s desperate need for affection; not to mention, but the hook is very catchy. Speaking of catchy, “Sanctuary” has meaningful, deep lyrics with a great melody that makes it unforgettable. “Pretty Boy” is my favorite song of the album because its upbeat melody deviates from the rest of the album and is extremely catchy. Nectar truly showcases Joji’s skill in making songs that are so mournful and grim, but feel great to sing along to. Nectar really feels like a cloudy, reflective trip."
  )

  .start();

var app2 = document.getElementById("fsong");

var typewriter2 = new Typewriter(app2, {
  delay: 100,
  autoStart: false,
});

typewriter2.typeString("Favorite Song: Pretty Boy").start();

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
