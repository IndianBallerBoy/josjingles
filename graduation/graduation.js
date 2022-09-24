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
  width: [0, 483.5], // -> from '28px' to '100%',
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
    'Graduation is an unforgettable Kanye album that caps off the Dropout Bear’s trilogy. In 14 tracks, West solidifies himself as a G.O.A.T. of hip-hop. Kanye begins the album with “Good Morning”, an optimistic song that touches on dark topics of progressiveness and the New-Age. “Homecoming” is a fantastic song in which Kanye uses piano and a great chorus to extend the metaphor of his hometown, Chicago, to a past lover. “Flashing Lights” has one of the best intros that hip-hop as a genre has produced and delves into Kanye’s difficulties with women. “Champion” is a great characterization of Kanye West’s immovable confidence. West truly believes that he has achieved legendary status and displays it on this track that samples Steely Dan\'s "Kid Charlemagne". “Stronger” and “Can’t Tell Me Nothing” were major hits that use French EDM to make anybody who listens to the song feel just as unstoppable as Kanye. “I Wonder”, on the other hand, is an emotional track that embodies the very human desire to find his or her dream. T-pain works well with Kanye on “Good Life” to make people feel empowered and feel happy living the so-called “good life”.  “Everything I Am” is Kanye’s recognition that he is imperfect, but is proud of who he is. Throughout the whole album, Kanye West makes a statement that he loves the fame and life he is living now, and he will continue to achieve his dreams and nobody can really tell him anything.'
  )

  .start();

var app2 = document.getElementById("fsong");

var typewriter2 = new Typewriter(app2, {
  delay: 100,
  autoStart: false,
});

typewriter2.typeString("Favorite Song: Everything I Am").start();

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
