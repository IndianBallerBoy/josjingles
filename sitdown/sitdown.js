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
  width: [0, 468], // -> from '28px' to '100%',
  easing: "easeInOutElastic",
  direction: "normal",
});
anime({
  targets: "#word-cover",
  scaleX: 0,

  delay: 1000,

  loop: false,
});
var app = document.getElementById("review");

var typewriter = new Typewriter(app, {
  delay: 10,
});

typewriter
  .typeString(
    "Sit Down, Man is a masterpiece that effortlessly combines humor and hip-hop into an hour and seventeen minutes of musical ecstasy. On each song, Das Racist uses intricate rhyme schemes and lyrics that can come off as a joke, but also hold deeper meanings. Their self-awareness is apparent throughout the whole album, especially in “Hahahaha jk”, where they use “We're not joking, just joking, we are joking. Just joking, we're not joking” as their hook. The album also uses pop culture references in every song and it sounds like a funny commentary on life itself. Das Racist references the Simpsons, Jay-Z, Usher, The Matrix, and many more cultural icons in Sit Down, Man. Even though Sit Down, Man often feels like a joke, the impactful messages that it shares about being South Asian in hip-hop and making the realization that you have to sacrifice in order to succeed. Das Racist deeply resonates with me as a person because they bring out South Asian experiences, which I can relate to, into hip-hop in a joking manner. Overall, the album uses goofy beats and silly lyrics that are meant to make you laugh, but at the same time bring awareness to different issues faced on both a personal and societal level.The album also shows versatility in that Das Racist shifts from cloud-rap in “Amazing” to an EDM-type beat in “Commercial”.    "
  )

  .start();

var app2 = document.getElementById("fsong");

var typewriter2 = new Typewriter(app2, {
  delay: 100,
  autoStart: false,
});

typewriter2.typeString("Favorite Song: Return to Innocence").start();

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
