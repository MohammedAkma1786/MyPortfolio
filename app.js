document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector("#navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Close the menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) && !navbar.contains(event.target)) {
      navbar.classList.remove("active");
    }
  });
});
