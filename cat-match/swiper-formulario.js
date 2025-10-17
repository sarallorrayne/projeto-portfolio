window.addEventListener("load", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    allowTouchMove: true,
    speed: 1000,
    breakpoints: {
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 }
    }
  });

  document.querySelectorAll(".fa-xmark").forEach(icon => {
    icon.style.cursor = "pointer";
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      swiper.slideNext();
    });
  });
  
    document.querySelectorAll(".fa-heart").forEach(icon => {
    icon.style.cursor = "pointer";
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "deu-match.html";
    });
  });
});