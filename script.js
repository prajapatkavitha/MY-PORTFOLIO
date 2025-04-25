// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  
  // Active Dot on Scroll
  const sections = document.querySelectorAll("section[id]");
  const dots = document.querySelectorAll(".dot");
  
  function setActiveDot() {
    let index = sections.length;
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index]?.classList.add("active");
  }
  
  window.addEventListener("scroll", setActiveDot);
  window.addEventListener("load", setActiveDot);
  
