class Slider {
  constructor(props) {
    const { id, timer, animation } = props;
    //===variables and Internal functions===//
    const sliderNode = document.getElementById(id);
    const slides = sliderNode.querySelectorAll(".slide");
    const playBtn = sliderNode.querySelector(".slider-play-btn");
    const pauseBtn = sliderNode.querySelector(".slider-pause-btn");
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
    this.play = () => {
      sliderInterval = setInterval(slideLoop, timer ? timer : 5000);
    };
    this.pause = () => {
      clearInterval(sliderInterval);
    };
    //===Event listeners===//
    document.addEventListener("DOMContentLoaded", changeSlide(0));
    pauseBtn?.addEventListener("click", () => {
      this.pause();
      pauseBtn.classList.add("hide");
      playBtn.classList.remove("hide");
    });
    playBtn?.addEventListener("click", () => {
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
