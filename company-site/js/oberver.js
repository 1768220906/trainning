const targets = document.querySelectorAll(".target");

const oberver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("start");
    }
  });
});

targets.forEach((target) => {
  oberver.observe(target);
});
