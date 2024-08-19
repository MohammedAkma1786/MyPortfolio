document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".imgWeb");

  image.addEventListener("click", function () {
    image.classList.toggle("expanded");
  });
});
