const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const { width, height } = e.currentTarget.getBoundingClientRect()
    btn.style.transform = `translate3d(${(e.offsetX - (width / 2)) / 2}px, ${(e.offsetY - (height / 2)) / 2}px, 0px)`;
  });

  btn.addEventListener("mouseout", (e) => {
    btn.style.transform = "none";
  });
});


let btnplay = document.querySelector(".btn_special");

btnplay.addEventListener("mousemove", (e) => {
  const { width, height } = e.currentTarget.getBoundingClientRect()
  btnplay.style.transform = `translate3d(${(e.offsetX - (width / 2)) / 5}px, ${(e.offsetY - (height / 5)) / 2}px, 0px)`;

});

btnplay.addEventListener("mouseout", (e) => {
  btnplay.style.transform = "none";
});


const costumeLink = document.querySelector('.costume');
const actingLink = document.querySelector('.acting');
const modellingLink = document.querySelector('.modelling');
const artistLink = document.querySelector('.artist');
const btmleftImgs = document.querySelectorAll('.btmleft img');
const toprightImgs = document.querySelectorAll('.topright img');

function changeOpacity(imgClass) {
  btmleftImgs.forEach((img) => {
    if (img.classList.contains(imgClass)) {
      img.style.opacity = 1;
    } else {
      img.style.opacity = 0;
    }
  });
  
  toprightImgs.forEach((img) => {
    if (img.classList.contains(imgClass)) {
      img.style.opacity = 1;
    } else {
      img.style.opacity = 0;
    }
  });
}

costumeLink.addEventListener('mouseover', () => {
  changeOpacity('img-cover');
});

actingLink.addEventListener('mouseover', () => {
  changeOpacity('img-cover2');
});

modellingLink.addEventListener('mouseover', () => {
  changeOpacity('img-cover3');
});

artistLink.addEventListener('mouseover', () => {
  changeOpacity('img-cover4');
});


const midmenuLinks = document.querySelectorAll(".midmenu a");
const imgCovers = document.querySelectorAll(".img-cover, .img-cover2, .img-cover3, .img-cover4");

midmenuLinks.forEach(link => {
  link.addEventListener("mousemove", (e) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    imgCovers.forEach(imgCover => {
      imgCover.style.transform = `translate3d(${(e.offsetX - (width / 2)) / 2}px, ${(e.offsetY - (height / 2)) / 2}px, 0px)`;
    });
  });

  link.addEventListener("mouseout", (e) => {
    imgCovers.forEach(imgCover => {
      imgCover.style.transform = "none";
    });
  });
});

