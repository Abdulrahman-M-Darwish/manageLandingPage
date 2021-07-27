let icon = document.querySelector(".icon");
let list = document.querySelector(".list");
let overlay = document.querySelector(".overlay");
let parent = document.querySelector(".testimonials-content");
let slider = document.querySelector(".slider");
let sliderNodes = document.querySelectorAll(".slider .person");
let sliderNode = document.querySelector(".slider .person");
let listNodes = document.querySelectorAll(".bullets li");
let pressed = false;
let x;
let input = document.querySelector("form .text");
let submit = document.querySelector(".submit");
let form = document.querySelector("form");
let size = sliderNode.clientWidth;

icon.addEventListener("click", () => {
  if (icon.getAttribute("src") === "./images/icon-hamburger.svg") {
    list.style.left = "50%";
    overlay.style.top = "0";
    icon.setAttribute("src", "./images/icon-close.svg");
  } else {
    list.style.left = "-50%";
    icon.setAttribute("src", "./images/icon-hamburger.svg");
    overlay.style.top = "-100%";
  }
});

parent.addEventListener("mousedown", (e) => {
  pressed = true;
  x = e.offsetX - slider.offsetLeft;
  parent.style.cursor = "grabbing";
});

parent.addEventListener("mouseenter", () => {
  parent.style.cursor = "grab";
});

parent.addEventListener("mouseup", () => {
  parent.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

parent.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();
  slider.style.left = `${e.offsetX - x}px`;
  posChecker();
});

function posChecker() {
  let sliderPos = slider.getBoundingClientRect();
  let parentPos = parent.getBoundingClientRect();
  if (parseInt(slider.style.left) > 0) {
    slider.style.left = "0px";
  } else if (sliderPos.right < parentPos.right) {
    slider.style.left = `-${sliderPos.width - parentPos.width}px`;
  }
}

listNodes.forEach((ele, i) => {
  ele.addEventListener("click", (e) => {
    listNodes.forEach((ele) => {
      ele.classList.remove("active");
    });
    console.log((slider.style.left = `${-size * i - 30 * i + 15}px`));
    console.log(i);
    e.currentTarget.classList.add("active");
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let val = input.value;
  if (val === "") {
    form.classList.add("error");
  } else if (!val.includes("@")) {
    form.classList.add("error");
  } else if (val.slice(val.indexOf("@") + 1) === "") {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});