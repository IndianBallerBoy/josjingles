anime({
  targets: ".row",
  translateX: anime.stagger([0, 795]),
  delay: anime.stagger(500), // increase delay by 100ms for each elements.
});

anime({
  targets: ".row2",
  translateX: anime.stagger([0, 795]),
  delay: anime.stagger(500, { direction: "normal" }), // increase delay by 100ms for each elements.
});

anime({
  targets: ".row3",
  translateX: anime.stagger([0, 795]),
  delay: anime.stagger(500, { direction: "normal" }), // increase delay by 100ms for each elements.
});

anime({
  targets: ".row4",
  translateX: anime.stagger([0, 795]),
  delay: anime.stagger(500, { direction: "normal" }), // increase delay by 100ms for each elements.
});

/*anime({
  targets: ".square",
  keyframes: [
    { translateX: [-125, 125], scale: 2 },
    { scale: 1 },
    { translateY: [0, -175] },
    { translateX: [125, -125] },
    { translateY: [-175, 0] },
  ],
  duration: 4000,
  easing: "easeInQuad",
  loop: true,
});

var hover = anime({
  targets: ".the-off-season",
  borderRadius: "50%",
  direction: "alternate",
  autoplay: false,

  duration: 36000,
});
*/

//Animation for top text
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: ".ml1",
    opacity: 1000,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

//Progrssbar
var bar = new ProgressBar.Circle(container, {
  color: "#00FF00",
  trailColor: "#1E742D",
  trailWidth: 1,
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  easing: "bounce",
  strokeWidth: 8,
  from: { color: "#FFEA82", a: 0 },
  to: { color: "#00FF00", a: 0.5 },
  // Set default step function for all animate calls
});

document.getElementById("fhd2014-rating").hidden = true;
document.getElementById("container").hidden = true;

function circleProgress() {
  bar.animate(0.97);
  bar.text;
  document.getElementById("container").style.zIndex = "2";
  document.getElementById("container").hidden = false;
  document.getElementById("fhd2014-rating").hidden = false;
}
function circleReset() {
  bar.animate(0);
  document.getElementById("container").style.zIndex = "0";
  document.getElementById("container").hidden = true;
  document.getElementById("fhd2014-rating").hidden = true;
}

//Animation for hovering on Albums
var anyAlbum = document.querySelector(".fhd2014-image");

function animateButton(scale, duration, elasticity, radius, rot) {
  anime({
    targets: anyAlbum,
    borderRadius: [0, radius],
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    rotateZ: rot,
  });
}

function enterButton() {
  animateButton(1.2, 600, 400, 50, 2);
  circleProgress();
}
function leaveButton() {
  animateButton(1.0, 600, 300, 0, 0);
  circleReset();
}

anyAlbum.addEventListener("mouseenter", enterButton, false);
anyAlbum.addEventListener("mouseleave", leaveButton, false);

var bar2 = new ProgressBar.Circle(container2, {
  color: "#00FF00",
  trailColor: "#1E742D",
  trailWidth: 1,
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  easing: "bounce",
  strokeWidth: 8,
  from: { color: "#FFEA82", a: 0 },
  to: { color: "#00FF00", a: 0.5 },
});

document.getElementById("graduation-rating").hidden = true;
document.getElementById("container2").hidden = true;

function circleProgress2() {
  bar2.animate(0.93);
  bar.text;
  document.getElementById("container2").style.zIndex = "2";
  document.getElementById("container2").hidden = false;
  document.getElementById("graduation-rating").hidden = false;
}
function circleReset2() {
  bar2.animate(0);
  document.getElementById("container2").style.zIndex = "0";
  document.getElementById("container2").hidden = true;
  document.getElementById("graduation-rating").hidden = true;
}

var anyAlbum2 = document.querySelector(".graduation-image");

function animateButton2(scale, duration, elasticity, radius, rot) {
  anime({
    targets: anyAlbum2,
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    borderRadius: [0, radius],
    rotateZ: rot,
  });
}
function enterButton2() {
  animateButton2(1.2, 600, 400, 50, 2);
  circleProgress2();
}
function leaveButton2() {
  animateButton2(1.0, 600, 300, 0, 0);
  circleReset2();
}

anyAlbum2.addEventListener("mouseenter", enterButton2, false);
anyAlbum2.addEventListener("mouseleave", leaveButton2, false);
//Animation for hovering on Albums

var bar3 = new ProgressBar.Circle(container3, {
  color: "#00FF00",
  trailColor: "#1E742D",
  trailWidth: 1,
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  easing: "bounce",
  strokeWidth: 8,
  from: { color: "#FFEA82", a: 0 },
  to: { color: "#00FF00", a: 0.5 },
});

document.getElementById("nectar-rating").hidden = true;
document.getElementById("container3").hidden = true;

function circleProgress3() {
  bar3.animate(0.88);
  bar.text;
  document.getElementById("container3").style.zIndex = "2";
  document.getElementById("container3").hidden = false;
  document.getElementById("nectar-rating").hidden = false;
}
function circleReset3() {
  bar3.animate(0);
  document.getElementById("container3").style.zIndex = "0";
  document.getElementById("container3").hidden = true;
  document.getElementById("nectar-rating").hidden = true;
}

var anyAlbum3 = document.querySelector(".nectar-image");

function animateButton3(scale, duration, elasticity, radius, rot) {
  anime({
    targets: anyAlbum3,
    borderRadius: [0, radius],
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    rotateZ: rot,
  });
}

function enterButton3() {
  animateButton3(1.2, 600, 400, 50, 2);
  circleProgress3();
}
function leaveButton3() {
  animateButton3(1.0, 600, 300, 0, 0);
  circleReset3();
}

anyAlbum3.addEventListener("mouseenter", enterButton3, false);
anyAlbum3.addEventListener("mouseleave", leaveButton3, false);

var bar4 = new ProgressBar.Circle(container4, {
  color: "#00FF00",
  trailColor: "#1E742D",
  trailWidth: 1,
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  easing: "bounce",
  strokeWidth: 8,
  from: { color: "#FFEA82", a: 0 },
  to: { color: "#00FF00", a: 0.5 },
});

document.getElementById("damn-rating").hidden = true;
document.getElementById("container4").hidden = true;

function circleProgress4() {
  bar4.animate(0.95);
  bar.text;
  document.getElementById("container4").style.zIndex = "2";
  document.getElementById("container4").hidden = false;
  document.getElementById("damn-rating").hidden = false;
}
function circleReset4() {
  bar4.animate(0);
  document.getElementById("container4").style.zIndex = "0";
  document.getElementById("container4").hidden = true;
  document.getElementById("damn-rating").hidden = true;
}

var anyAlbum4 = document.querySelector(".damn-image");

function animateButton4(scale, duration, elasticity, radius, rot) {
  anime({
    targets: anyAlbum4,
    borderRadius: [0, radius],
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    rotateZ: rot,
  });
}

function enterButton4() {
  animateButton4(1.2, 600, 400, 50, 2);
  circleProgress4();
}
function leaveButton4() {
  animateButton4(1.0, 600, 300, 0, 0);
  circleReset4();
}

anyAlbum4.addEventListener("mouseenter", enterButton4, false);
anyAlbum4.addEventListener("mouseleave", leaveButton4, false);

var bar5 = new ProgressBar.Circle(container5, {
  color: "#00FF00",
  trailColor: "#1E742D",
  trailWidth: 1,
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  easing: "bounce",
  strokeWidth: 8,
  from: { color: "#FFEA82", a: 0 },
  to: { color: "#00FF00", a: 0.5 },
});

document.getElementById("mmlp-rating").hidden = true;
document.getElementById("container5").hidden = true;

function circleProgress5() {
  bar5.animate(0.97);
  bar.text;
  document.getElementById("container5").style.zIndex = "2";
  document.getElementById("container5").hidden = false;
  document.getElementById("mmlp-rating").hidden = false;
}
function circleReset5() {
  bar5.animate(0);
  document.getElementById("container5").style.zIndex = "0";
  document.getElementById("container5").hidden = true;
  document.getElementById("mmlp-rating").hidden = true;
}

var anyAlbum5 = document.querySelector(".mmlp-image");

function animateButton5(scale, duration, elasticity, radius, rot) {
  anime({
    targets: anyAlbum5,
    borderRadius: [0, radius],
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    rotateZ: rot,
  });
}

function enterButton5() {
  animateButton5(1.2, 600, 400, 50, 2);
  circleProgress5();
}
function leaveButton5() {
  animateButton5(1.0, 600, 300, 0, 0);
  circleReset5();
}

anyAlbum5.addEventListener("mouseenter", enterButton5, false);
anyAlbum5.addEventListener("mouseleave", leaveButton5, false);

var bar6 = new ProgressBar.Circle(container6, {
  color: "#00FF00",
  trailColor: "#1E742D",
  trailWidth: 1,
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  easing: "bounce",
  strokeWidth: 8,
  from: { color: "#FFEA82", a: 0 },
  to: { color: "#00FF00", a: 0.5 },
});

document.getElementById("sitdown-rating").hidden = true;
document.getElementById("container6").hidden = true;

function circleProgress6() {
  bar6.animate(0.9);
  bar.text;
  document.getElementById("container6").style.zIndex = "2";
  document.getElementById("container6").hidden = false;
  document.getElementById("sitdown-rating").hidden = false;
}
function circleReset6() {
  bar6.animate(0);
  document.getElementById("container6").style.zIndex = "0";
  document.getElementById("container6").hidden = true;
  document.getElementById("sitdown-rating").hidden = true;
}

var anyAlbum6 = document.querySelector(".sitdown-image");

function animateButton6(scale, duration, elasticity, radius, rot) {
  anime({
    targets: anyAlbum6,
    borderRadius: [0, radius],
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    rotateZ: rot,
  });
}

function enterButton6() {
  animateButton6(1.2, 600, 400, 50, 2);
  circleProgress6();
}
function leaveButton6() {
  animateButton6(1.0, 600, 300, 0, 0);
  circleReset6();
}

anyAlbum6.addEventListener("mouseenter", enterButton6, false);
anyAlbum6.addEventListener("mouseleave", leaveButton6, false);

var bar7 = new ProgressBar.Circle(container7, {
  color: "#00FF00",
  trailColor: "#1E742D",
  trailWidth: 1,
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  easing: "bounce",
  strokeWidth: 8,
  from: { color: "#FFEA82", a: 0 },
  to: { color: "#00FF00", a: 0.5 },
});

document.getElementById("mom-rating").hidden = true;
document.getElementById("container7").hidden = true;

function circleProgress7() {
  bar7.animate(0.95);
  bar.text;
  document.getElementById("container7").style.zIndex = "2";
  document.getElementById("container7").hidden = false;
  document.getElementById("mom-rating").hidden = false;
}
function circleReset7() {
  bar7.animate(0);
  document.getElementById("container7").style.zIndex = "0";
  document.getElementById("container7").hidden = true;
  document.getElementById("mom-rating").hidden = true;
}

var anyAlbum7 = document.querySelector(".mom-image");

function animateButton7(scale, duration, elasticity, radius, rot) {
  anime({
    targets: anyAlbum7,
    borderRadius: [0, radius],
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    rotateZ: rot,
  });
}

function enterButton7() {
  animateButton7(1.2, 600, 400, 50, 2);
  circleProgress7();
}
function leaveButton7() {
  animateButton7(1.0, 600, 300, 0, 0);
  circleReset7();
}

anyAlbum7.addEventListener("mouseenter", enterButton7, false);
anyAlbum7.addEventListener("mouseleave", leaveButton7, false);

bar.path.style.strokeLinecap = "round";
bar2.path.style.strokeLinecap = "round";
bar3.path.style.strokeLinecap = "round";
bar4.path.style.strokeLinecap = "round";
bar5.path.style.strokeLinecap = "round";
bar6.path.style.strokeLinecap = "round";
bar7.path.style.strokeLinecap = "round";
