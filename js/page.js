let currentIndex = 0;
let images = [];

function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  images = Array.from(document.querySelectorAll(".image-grid img"));
  currentIndex = images.indexOf(img);

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

function nextImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("modalImg").src = images[currentIndex].src;
}

function prevImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("modalImg").src = images[currentIndex].src;
}

// close modal
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("imgModal").addEventListener("click", closeModal);
});

document.querySelectorAll(".image-grid img").forEach(img => {
  img.addEventListener("click", () => openModal(img));
});