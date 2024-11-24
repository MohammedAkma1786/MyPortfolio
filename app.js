document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");
  const links = navbar.querySelectorAll("a");

  /**
   * Toggles the navbar visibility and updates the aria-expanded attribute.
   */
  const toggleNavbar = () => {
    const isActive = navbar.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isActive);
  };

  /**
   * Closes the navbar and updates the aria-expanded attribute.
   */
  const closeNavbar = () => {
    navbar.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  /**
   * Smooth scrolls to the target section when a navbar link is clicked.
   * @param {Event} event
   */
  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      closeNavbar();
    }
  };

  /**
   * Handles keyboard navigation for accessibility .
   * @param {KeyboardEvent} event
   */
  const handleKeydown = (event) => {
    if (navbar.classList.contains("active")) {
      const focusableElements = Array.from(navbar.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'));
      const [firstFocusable, lastFocusable] = [focusableElements[0], focusableElements[focusableElements.length - 1]];

      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      } else if (event.key === "Escape") {
        closeNavbar();
        menuToggle.focus();
      }
    }
  };

  /**
   * Resets the navbar state for larger screens (width > 768px).
   */
  const handleResize = () => {
    if (window.innerWidth > 768) closeNavbar();
  };

  // Event Listeners
  menuToggle.addEventListener("click", toggleNavbar);
  document.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) && !navbar.contains(event.target)) closeNavbar();
  });
  links.forEach((link) => link.addEventListener("click", smoothScroll));
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("resize", handleResize);
});
