// Image Slider //
const img0 = document.getElementById("img0");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

var images = [img0, img1, img2, img3, img4, img5];
var buttons = [btn0, btn1, btn2, btn3, btn4, btn5];

var btnLeft = document.getElementById("btn--left");
var btnRight = document.getElementById("btn--right");

var btnTurnOnSlides = document.querySelector(".turn-on-slideshow");

const imgSetClass = function (i) {
  let btn = buttons[i];
  console.log(`You clicked ${btn.id}`);

  for (let button of buttons) {
    if (button.id === btn.id) {
      button.className = "page-link page-link--current";
    } else {
      button.className = "page-link";
    }
  }

  for (let image of images) {
    let indx = images.indexOf(image);
    if (i === indx) {
      image.className = "img";
    } else {
      image.className = "img hidden";
    }
  }
};

const sliderIndex = function () {
  let num;

  for (let btn of buttons) {
    if (btn.className === "page-link page-link--current") {
      num = Number(btn.id[3]);
      console.log(`in sliderIndex() and num is ${num}`);
    }
  }
  return num;
};

const moveOneFrame = function (num, direction) {
  if (direction === "left") {
    console.log("you clicked left arrow button");
    imgSetClass(num - 1);
  } else {
    console.log("you clicked the right arrow button");
    imgSetClass(num + 1);
  }
};

const advanceImage = function (i) {
  for (let image of images) {
    let indx = images.indexOf(image);
    if (i === indx) {
      image.className = "img";
    } else {
      image.className = "img hidden";
    }
  }
};

const setButton = function (i) {
  for (let btn of buttons) {
    let indx = buttons.indexOf(btn);
    if (i === indx) {
      btn.className = "page-link page-link--current";
    } else {
      btn.className = "page-link";
    }
  }
};

const stopSlideshow = function () {
  clearTimeout(slideShow);
};

// The solution for the slideshow was found
// at:https://www.freecodecamp.org/news/thrown-for-a-loop-understanding-for-loops-and-timeouts-in-javascript-558d8255d8a4/

function repeatLoop() {
  location.reload();
}

const slideShow = function () {
  for (let i = 1; i < images.length; i++) {
    setTimeout(() => {
      advanceImage(i);
      setButton(i);
      if (i === images.length - 1) {
        setTimeout(repeatLoop, 5000);
      }
    }, i * 5000);
  }
};

btn0.addEventListener("click", function () {
  imgSetClass(0);
});

btn1.addEventListener("click", function () {
  imgSetClass(1);
});

btn2.addEventListener("click", function () {
  imgSetClass(2);
});

btn3.addEventListener("click", function () {
  imgSetClass(3);
});

btn4.addEventListener("click", function () {
  imgSetClass(4);
});

btn5.addEventListener("click", function () {
  imgSetClass(5);
});

btnLeft.addEventListener("click", function () {
  let num;
  num = sliderIndex();
  console.log(`in btnLeft event listener and num is ${num}`);
  moveOneFrame(num, "left");
});

btnRight.addEventListener("click", function () {
  let num;
  num = sliderIndex();
  console.log(`in btnRight event listener and num is ${num}`);
  moveOneFrame(num, "right");
});

btnTurnOnSlides.addEventListener("click", function () {
  slideShow();
});
