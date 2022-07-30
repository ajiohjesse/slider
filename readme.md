# **SLIDER PROJECT**

This project contains some JavaScript powered carousels built mainly for fun. These carousels can however be easily integrated into any javascript project or website.

## **Carousels**

- Slider.module.js
- TextSlider.module.js

## **Functionality**

The functionality for each carousel is defined as a JavaScript class which resides in **_.module.js_** files inside the **modules** folder.

---

> ### **How to use:**

---

First import the desired carousel from the **modules** folder.

```JavaScript
import Slider from "../modules/Slider.module.js";

import TextSlider from "../modules/TextSlider.module.js";
```

Create a new instance of the slider;

```JavaScript
const slider = new Slider(props);

const textSlider = new TextSlider(props);
```

Each slider class receives an argument of **props** which is a Javascript object.

---

> ### **Slider Props:**

---

- ## Slider.module.js

**Slider.module.js** recieves an object with _id_, _timer_, and _animation_ keys as props. Each key-value pair except timer is **required** for the slider to work.

```JavaScript
props = {
id: "heroSlider",
timer: 4000,
animation: "slide-in",
}
```

- **id** refers to the id attribute given to the html element that houses the slides e.g

  ```html
  <div id="heroSlider">
    <div class="slide">...</div>
    <div class="slide">...</div>
    <div class="slide">...</div>
  </div>
  ```

- **timer** refers to the time interval before each slide is changed. Its value is defined as a number in milliseconds e.g 4000 for 4 seconds. If timer is not defined, it'll default to 5000.

- **animation:** The slides inside the HTML slider container should be configured in such a way that they are hidden by default. This can be achieved for example by setting the width property of each slide to 0.

  ```css
  .slide {
    width: 0;
    opacity 0;
  }
  ```

  Another CSS class should be defined with properties that make the slide visible e.g

  ```css
  .slide-in {
    width: 100%;
    opacity: 1;
  }
  ```

  Animation refers to the name of this new CSS class that makes the slide visible. In this case, the name is **_slide-in_**.

### Methods:

Every slider class has two methods;

```JavaScript
slider.play() //adds a setInterval()
```

```JavaScript
slider.pause() //clears the interval
```

After defining the props object and passing it as an argument when creating a new instance of a slider, call the _play_ method on the slider to initiate the slide show.

---

> ### **Extra functionality:**

---

**Slider.module.js** supports play and pause buttons. All that is required for this feature is to place two buttons within the HTML slider container, one with a Class of **_"slider-play-btn"_** and the other with a class of **_"slider-pause-btn"_**. Style the buttons as you wish.

```html
<div id="heroSlider">
  <button class="slider-play-btn">...</button>
  <button class="slider-pause-btn">...</button>

  <div class="slide">...</div>
  <div class="slide">...</div>
  <div class="slide">...</div>
</div>
```

---

> ### **Note:**
>
> By default, every slider pauses automatically in situations where the HTML document is not visible or loses focus. Such situations include when another browser tab is opened.

---

- ## TextSlider.module.js

**TextSlider.module.js** functions similarly to **Slider.module.js**, the only difference beign that **TextSlider** is customized for text and as such recieves a props argument with a few more key-value pairs.

The props for this slider contains _id_, _timer_, _interval_, _introAnimation_, _outroAnimation_ and _textArray_. Of this key-value pairs, only the **id** and **textArray** is **required** for the slider to work.

```JavaScript
props = {
  id: "heroTextSlider",
  timer: 5000,
  interval: 1,
  introAnimation: "slide-up",
  outroAnimation: "fade-out",
  textArray: ["business.", "company.", "brand."],
}
```

- **id** refers to the id attribute given to the html element that will house each text from the textArray e.g

  ```html
  <h1 id="heroTextSlider"></h1>
  ```

- **timer** refers to the time interval before each new text is rendered. Its value is defined as a number in milliseconds e.g 4000 for 4 seconds. If timer is not defined, it'll default to 5000.

- **interval:** If you wish to create a wave effect by rendering each character in the **text** from the **textArray** at a different speed, then specify an interval.

  _Interval_ is specified as a number. The higher the number, the slower the characters in the text will be rendered and vice versa.

  If _interval_ is not defined, it'll default to 0 which means there'll be no time difference between each character and the text will be rendered at once as a single word.

- **introAnimation** refers to a CSS class that'll be applied to each **character** in the text beign rendered. It can be customized to add a beautiful entry animation for the characters.
- **outroAnimation** refers to a CSS class that'll be applied to the previously renderd text before it is removed prior to another render cycle. It can be customized to add a beautiful exit animation for the text.

  **Note:** introAnimation is applied to each character or alphabet in the text while outroAnimation is aplied to the entire text.

- **textArray** refers to a Javascript array/list of strings or texts to be rendered by the textSlider. Add as many texts as needed.
