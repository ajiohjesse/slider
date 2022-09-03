class Slider {
  /**
   *@params id: String or Props = {
   * id: String,
   * timer: Number,
   * animation: String,
   * }
   *
   * @returns a slider object with the methods play() and pause().
   * The "id" is the only mandatroy argument.
   *
   * @copyright RehxMedia. Designed by Jesse Ajioh.
   */

  constructor(props) {
    let id, timer, animation;
    if (typeof props === "object") {
      id = props.id;
      timer = props.timer;
      animation = props.animation;
    } else {
      id = props;
    }

    //====== VARIABLES AND INTERNAL FUNCTIONS ========//
    const sliderNode = document.getElementById(id);
    const slides = sliderNode.querySelectorAll(".slide");
    const playBtn = sliderNode.querySelector(".slider-play-btn");
    const pauseBtn = sliderNode.querySelector(".slider-pause-btn");
    let count = 1;
    let sliderInterval;

    //check for custom animation
    if (!animation) {
      sliderNode.style.position = "relative";
      slides.forEach(slide => {
        slide.style.width = "100%";
        slide.style.height = "100%";
        slide.style.position = "absolute";
        slide.style.top = 0;
        slide.style.left = 0;
        slide.style.opacity = 0;
        slide.style.transition = "all 1.5s cubic-bezier(0.7, 0.07, 0.52, 1.01)";
        slide.style.overflow = "hidden";
      });
    }

    //carries out the actual changing of slides
    const changeSlide = index => {
      slides.forEach(slide => {
        if (animation) {
          slide.classList.remove(animation);
        } else {
          slide.style.opacity = 0;
        }
      });

      if (animation) {
        slides[index].classList.add(animation);
      } else {
        slides[index].style.opacity = 1;
      }
    };

    //called each time slide is to be changed
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

    //======== METHODS ==========//
    this.play = () => {
      sliderInterval = setInterval(slideLoop, timer ? timer : 5000);
    };
    this.pause = () => {
      clearInterval(sliderInterval);
    };

    //========== EVENT LISTENERS ============//
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
