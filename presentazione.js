

  /* JavaScript */
setTimeout(function() {
    document.querySelector('#logo-page').style.display = 'none';
    document.querySelector('#tattoo-page').style.display = 'flex';
  }, 3000);


  /*Carousel */

  const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let index = 0;

function showImage() {
  images.forEach(image => {
    image.classList.remove("active");
  });
  images[index].classList.add("active");
}

function prevImage() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage();
}

function nextImage() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  showImage();
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

const interval = setInterval(nextImage, 3000);

carousel.addEventListener("mouseenter", () => {
  clearInterval(interval);
});

carousel.addEventListener("mouseleave", () => {
  interval = setInterval(nextImage, 3000);
});

  
  
  