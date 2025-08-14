const images = document.querySelectorAll(".images img");
let current = 0;

images.forEach((img, index) => {
  img.style.opacity = "0"; // 처음 숨김
});

function showNextImage() {
  images.forEach((img) => (img.style.opacity = "0"));
  images[current].style.opacity = "1";
  current = (current + 1) % images.length;
}

setInterval(showNextImage, 3000); // 3초마다 슬라이드

showNextImage(); // 초기 실행
