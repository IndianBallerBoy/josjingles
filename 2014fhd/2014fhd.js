//import * as Typed from "typed.js";

anime({
  targets: ".p-bar",
  width: [0, 504.5], // -> from '28px' to '100%',
  easing: "easeInOutElastic",
  direction: "normal",
});

anime({
  targets: "#demo-svg path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeOutCirc",
  duration: 9000,
  loop: false,
});

anime({
  targets: ".specific-unit-values-demo .el",
  width: "100%", // -> from '28px' to '100%',
  easing: "easeInOutQuad",
  direction: "alternate",
  loop: true,
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
    "J. Cole’s 2014 Forest Hills Drive is considered Cole’s magnum opus. A powerful album from start to finish that solidified Cole’s musical and lyrical genius. 2014 Forest Hills Drive starts with “January 28th”, a song named after Cole’s birthday, which is fitting since the song is an ode to Cole recognizing his own greatness and come-up in the rap game. “Wet Dreamz” was one of the biggest hits from the album that has goofy rhymes and a relatable story about Cole losing his virginity. Cole’s vibrant personality is all over this song as he talks about a problem many young men face. “‘03 Adolescence” is one of my favorite tracks which reflects how Cole’s problems and issues don’t compare to how bad others have it. Cole really shines in “A Tale of 2 Citiez” talking about how his ambitions grow and how he wants to flex on all the people that doubted his excellence. J. Cole gets rid of his humility for “Fire Squad” and goes off about how he is the best with no one that can compare. Listening to this song puts one in Cole’s place of confidence and ambition. “GOMD” and “No Role Modelz” are Cole’s biggest hits, both of which are irresistibly catchy and share thoughts about the world around us. The album’s last song “Love Yourz” is perfect motivation to the listener that at the end of the day, you should love your own life."
  )

  .start();

var app2 = document.getElementById("fsong");

var typewriter2 = new Typewriter(app2, {
  delay: 100,
  autoStart: false,
});

typewriter2.typeString("Favorite Song: Love Yourz").start();

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
