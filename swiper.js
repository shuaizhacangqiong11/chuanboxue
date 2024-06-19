let left = document.querySelector("#before");
let right = document.querySelector("#after");
let header = document.querySelector(".header");

let i = 0;
let timer = undefined
const playTime = () => {
  timer = setInterval(() => {
    header.style.backgroundImage = `url(./images/${(i++ % 2) + 1}.jpg)`;
  }, 2000);
};
playTime();
left.addEventListener("click", function () {
  clearInterval(timer);
  header.style.backgroundImage = `url(./images/${(i++ % 2) + 1}.jpg)`;
});
right.addEventListener("click", function () {
  clearInterval(timer);
  header.style.backgroundImage = `url(./images/${(i++ % 2) + 1}.jpg)`;
});
left.addEventListener("mouseenter", function () {
  clearInterval(timer);
});
left.addEventListener("mouseleave", playTime);
right.addEventListener("mouseenter", function () {
  clearInterval(timer);
});
right.addEventListener("mouseleave", playTime);
