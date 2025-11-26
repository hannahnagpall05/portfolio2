// INTRO SCREEN
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-screen");
  document.body.classList.add("intro-active");

  setTimeout(() => {
    if (intro) {
      intro.classList.add("hide");
      document.body.classList.remove("intro-active");
    }
  }, 1500); // intro visible ~1.5s
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((el) => observer.observe(el));

// News carousel arrows (B3)
const newsTrack = document.querySelector(".news-track");
const leftArrow = document.querySelector(".news-arrow-left");
const rightArrow = document.querySelector(".news-arrow-right");

function scrollNews(direction) {
  if (!newsTrack) return;
  const amount = 320; // px per click
  newsTrack.scrollBy({
    left: direction === "right" ? amount : -amount,
    behavior: "smooth",
  });
}

if (leftArrow) {
  leftArrow.addEventListener("click", () => scrollNews("left"));
}
if (rightArrow) {
  rightArrow.addEventListener("click", () => scrollNews("right"));
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
