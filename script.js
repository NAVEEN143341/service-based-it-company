const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("error");

    if (!name || !email || !message) {
      error.textContent = "Please fill all fields.";
      error.style.color = "red";
      return;
    }

    error.textContent = "Thank you! We will contact you shortly.";
    error.style.color = "green";
    form.reset();
  });
}