# **`SLIDER PROJECT`**

This project contains some JavaScript powered carousels that can be easily integrated into any website.

## **Carousels**

- Slider.module.js
- TextSlider.module.js

## **Functionality**

The functionality for each carousel is defined in a JavaScript class which resides in **_.module.js_** files inside the **modules** folder.

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
Slider.play();

const textSlider = new TextSlider(props);
textSlider.play();
```

Each new instance of a slider requires you to pass an argument of **props** which is a Javascript object.

---

> ### **Slider Props:**

---

- ## `Slider.module.js`

**Slider.module.js** recieves an object with _`id`_, _`timer`_, and _`animation`_ keys as props. However, Only the _`'Id'`_ is required for the slider to work and as such can be passed as the only argument.

```JavaScript
props = {
id: "heroSlider", //String
timer: 4000, //Number
animation: "slide-in", //String
}
```

- **`id`:** refers to the `id` attribute given to the html element that houses the slides e.g

  ```html
  <div class="container" id="heroSlider">
    <div class="slide">...</div>
    <div class="slide">...</div>
    <div class="slide">...</div>
  </div>
  ```

  ### Note:

  Only the `id` is mandatory as a props argument when creating a new slide instance. As such, this slider can be initialized with zero configuration by only passing in the `id` as a string argument. e.g

  ```javascript
  const slider = new Slider("heroSlider");

  Slider.play();
  ```

- **`timer`:** refers to the time interval before each slide is changed. Its value is defined as a number in milliseconds e.g 4000 for 4 seconds. If timer is not defined, it'll default to 5000.

- **`animation`:** This property is not required for the slide to work as the slide has its own built-in animation effect. However, if you wish to use your own custom animation for the slides, then follow, this method:

  Each HTML slide element inside the slider container should be configured in such a way that they are hidden by default. This can be achieved for example by;

  - Giving them a position of absolute, relative to the container. This is to ensure that the slides stack on-top of each other and only the last one is visible.
  - Setting the width or opacity of each slide to 0 using css.

  ```css
  .container {
    width: 300px;
    height: 300px;
    position: relative
  }

  .slide {
    height: 100%;
    width: 0;
    opacity 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 500ms ease;
  }
  ```

  Another CSS class should be defined with properties that make the slide visible e.g

  ```css
  .slide-in {
    width: 100%;
    opacity: 1;
  }
  ```

  `Animation` refers to the name of this new CSS class that makes the slide visible. In this case, the name is **_`slide-in`_** and can be passed as part of the props object.

## Methods:

Every slider class has two methods;

```JavaScript
slider.play() //adds a setInterval()
```

```JavaScript
slider.pause() //clears the interval
```

> ## Important
>
>After defining the props object and passing it as an argument when creating a new instance of a slider, call the _`play`_ method on the slider to initiate the slide show.

---

> ### **Extra functionality:**

---

**Slider.module.js** supports play and pause buttons. All that is required for this feature is to place two buttons within the HTML slider container, one with a Class of **_"slider-play-btn"_** and the other with a class of **_"slider-pause-btn"_**. Style the buttons as you wish.

```html
<div id="heroSlider">
  <div class="slide">...</div>
  <div class="slide">...</div>
  <div class="slide">...</div>

  <button class="slider-play-btn">...</button>
  <button class="slider-pause-btn">...</button>
</div>
```

---

> ### **Note:**
>
> By default, every slider is paused automatically in situations where the HTML document is not visible or loses focus. Such situations include when another browser tab is opened. The slider resumes play only when the document becomes visible again.

---

- ## `TextSlider.module.js`

**`TextSlider.module.js`** functions similarly to **`Slider.module.js`**, the only difference beign that **`TextSlider`** is customized for text and as such recieves a props argument with a few more key-value pairs.

The props for this slider contains _`id`_, _`timer`_, _`interval`_, _`introAnimation`_, _`outroAnimation`_ and _`text`_. Of this key-value pairs, only the **`id`** and **`text`** is **required** for the slider to work.

```JavaScript
props = {
  id: "heroTextSlider", //String
  timer: 5000, //Number
  interval: 1, //Number
  introAnimation: "slide-up", //String
  outroAnimation: "fade-out", //String
  text: ["business.", "company.", "brand."], //Array
}
```

- **`id`:** refers to the id attribute given to the html element that will house each text from the `text` array e.g

  ```html
  <h1>
    Hello
    <span id="heroTextSlider">[text goes here]</span>
  </h1>
  ```

- **`timer`:** refers to the time interval before each new text is rendered. Its value is defined as a number in milliseconds e.g 4000 for 4 seconds. If timer is not defined, it'll default to 5000.

- **`interval`:** If you wish to create an effect by rendering each character in the **text** from the **`text` array** at a different speed, then specify an interval.

  _Interval_ is specified as a number. The higher the number, the slower the characters in the text will be rendered and vice versa.

  If _interval_ is not defined, it'll default to 0 which means there'll be no time difference between each character and the text will be rendered at once as a single word.

- **`introAnimation`** refers to a CSS class that'll be applied to each **character** in the text beign rendered. It can be customized to add a beautiful entry animation for the characters.
- **`outroAnimation`** refers to a CSS class that'll be applied to the previously renderd text before it is removed from the DOM prior to another render cycle. It can be customized to add a beautiful exit animation for the text.

  **Note:** introAnimation is applied to each character or alphabet in the text while outroAnimation is aplied to the entire text.

- **`text`:** refers to a Javascript array/list of strings or texts to be rendered by the textSlider. Add as many texts as needed.

> ### Note:
>
>The `id` and `text` array must always be suplied as `props` in order for the textSlider to work. As such, the props for this particular slider is always an Object and never a String.
