class Slider {
  constructor(time) {
    //===variables and Internal functions===//

    const slides = document.querySelectorAll(".slide");
    const className = "fade-in";

    let count = 1;
    let intervalId;

    const changeSlide = index => {
      slides.forEach(slide => {
        slide.classList.remove(className);
      });
      slides[index].classList.add(className);
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

    this.pause = () => {
      clearInterval(intervalId);
    };

    this.play = () => {
      intervalId = setInterval(slideLoop, time);
    };

    //===Event listeners===//

    document.addEventListener("DOMContentLoaded", changeSlide(0));

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.play();
      } else {
        this.pause();
      }
    });
  }
}

const slider = new Slider(3000);

slider.play();
