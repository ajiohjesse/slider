class Slider {
  constructor(time, animation) {
    //===variables and Internal functions===//
    const slides = document.querySelectorAll(".slide");
    const playBtn = document.querySelector(".slider-play-btn");
    const pauseBtn = document.querySelector(".slider-pause-btn");
    let count = 1;
    let sliderInterval;
    const changeSlide = index => {
      slides.forEach(slide => {
        slide.classList.remove(animation);
      });
      slides[index].classList.add(animation);
    };
    const slideLoop = () => {
      if (count < slides.length) {
        changeSlide(count);
        count++;
      } else {
        count = 0;
        changeSlide(count);
        count++;
      }
    };
    //===Methods===//
    this.sliderNode = document.querySelector(".slider");
    this.play = () => {
      sliderInterval = setInterval(slideLoop, time);
    };
    this.pause = () => {
      clearInterval(sliderInterval);
    };
    //===Event listeners===//
    document.addEventListener("DOMContentLoaded", changeSlide(0));
    pauseBtn.addEventListener("click", () => {
      this.pause();
      pauseBtn.classList.add("hide");
      playBtn.classList.remove("hide");
    });
    playBtn.addEventListener("click", () => {
      this.play();
      playBtn.classList.add("hide");
      pauseBtn.classList.remove("hide");
    });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.play();
      } else {
        this.pause();
      }
    });
  }
}

export default Slider;
