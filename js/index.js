const myCRCLogo = document.getElementById("myCRCLogo");
const hiddenElements = document.querySelectorAll(".hidden");
const textChange = document.getElementById("textChange");

myCRCLogo.addEventListener("click", () => {
  hiddenElements.forEach((el) => {
    el.classList.add("show"); // triggers animation
  });
  textChange.textContent = "Tagline of the website in index.js";
});
