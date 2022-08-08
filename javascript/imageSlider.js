import Slider from "../modules/Slider.module.js";

const hero = {
  id: "heroSlider",
  // timer: 4000,
  animation: "slide-in",
};

const heroSlider = new Slider(hero);
heroSlider.play();

const secondSlider = new Slider("secondSlider");
secondSlider.play();
