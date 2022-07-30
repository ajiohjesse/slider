class TextSlider {
  constructor(props) {
    const { id, timer, interval, introAnimation, outroAnimation, textArray } =
      props;
    //===variables and Internal functions===//
    const slider = document.getElementById(id);
    let count = 1;
    let sliderInterval;
    const renderText = index => {
      const charArray = Array.from(textArray[index]);
      charArray.forEach((char, index) => {
        const span = document.createElement("span");
        setTimeout(() => {
          span.append(char);
          span.classList.add(introAnimation);
        }, 100 * (index * (interval ? interval : 0)));
        slider.append(span);
      });
    };
    const slideLoop = () => {
      if (count >= textArray.length) {
        count = 0;
        slider.classList.add(outroAnimation ? outroAnimation : "");
        setTimeout(() => {
          slider.innerHTML = "";
          slider.classList.remove(outroAnimation ? outroAnimation : "");
        }, 500);
        setTimeout(() => {
          renderText(count);
          count++;
        }, 600);
        return;
      }
      slider.classList.add(outroAnimation ? outroAnimation : "");
      setTimeout(() => {
        slider.innerHTML = "";
        slider.classList.remove(outroAnimation ? outroAnimation : "");
      }, 500);
      setTimeout(() => {
        renderText(count);
        count++;
      }, 600);
    };
    //===Methods===//
    this.play = () => {
      sliderInterval = setInterval(slideLoop, timer ? timer : 5000);
    };
    this.pause = () => {
      clearInterval(sliderInterval);
    };
    //===Event listeners===//
    document.addEventListener("DOMContentLoaded", renderText(0));
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.play();
      } else {
        this.pause();
      }
    });
  }
}

export default TextSlider;
