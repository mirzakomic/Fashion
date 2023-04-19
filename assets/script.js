let btn = document.querySelector(".btn");

btn.addEventListener("mousemove", (e) => {
  const { width, height } = e.currentTarget.getBoundingClientRect()
  btn.style.transform = `translate3d(${(e.offsetX - (width / 2)) / 2}px, ${(e.offsetY - (height / 2)) / 2}px, 0px)`;

});

btn.addEventListener("mouseout", (e) => {
  btn.style.transform = "none";
});

let btnplay = document.querySelector(".btn_special");

btnplay.addEventListener("mousemove", (e) => {
  const { width, height } = e.currentTarget.getBoundingClientRect()
  btnplay.style.transform = `translate3d(${(e.offsetX - (width / 2)) / 5}px, ${(e.offsetY - (height / 5)) / 2}px, 0px)`;

});

btnplay.addEventListener("mouseout", (e) => {
  btnplay.style.transform = "none";
});