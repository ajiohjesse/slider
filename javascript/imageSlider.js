import Slider from "../modules/Slider.js";

const hero = {
  id: "heroSlider",
  // timer: 4000,
  animation: "slide-in",
};

const heroSlider = new Slider("heroSlider");
heroSlider.play();

const secondSlider = new Slider("secondSlider");
secondSlider.play();
