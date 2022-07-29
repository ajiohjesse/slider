import TextSlider from "../Javascript modules/TextSlider.module.js";

const phrases = [
  "an experience",
  "a website",
  "a mobile app",
  "a front-end app",
];

const textSlider = new TextSlider(6000, "slide-up", phrases);

textSlider.play();
