import TextSlider from "../modules/TextSlider.module.js";

const services = {
  id: "service",
  timer: 5000,
  introAnimation: "slide-up",
  outroAnimation: "fade-out",
  textArray: ["an experience", "a website", "a mobile app", "a front end app"],
};
const clients = {
  id: "client",
  timer: 5000,
  interval: 1,
  introAnimation: "slide-up",
  outroAnimation: "fade-out",
  textArray: ["business.", "company.", "brand."],
};

const serviceSlider = new TextSlider(services);
const clientSlider = new TextSlider(clients);

serviceSlider.play();
clientSlider.play();
