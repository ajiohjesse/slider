class TextSlider {
  constructor(time, animation, textArray) {
    //===variables and Internal functions===//
    const slider = document.getElementById("text-slider");
    const texts = textArray;
    let count = 1;
    let sliderInterval;
    const renderText = index => {
      const textArray = Array.from(texts[index]);
      textArray.forEach((char, index) => {
        const span = document.createElement("span");
        setTimeout(() => {
          span.append(char);
          span.classList.add(animation);
        }, 100 * (index * 1.5));
        slider.append(span);
      });
    };
    const slideLoop = () => {
      if (count >= texts.length) {
        count = 0;
        slider.innerHTML = "";
        renderText(count);
        count++;
        return;
      }
      slider.innerHTML = "";
      renderText(count);
      count++;
    };
    //===Methods===//
    this.play = () => {
      sliderInterval = setInterval(slideLoop, time);
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

const slider = 1;
