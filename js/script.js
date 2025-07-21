const buttons = document.querySelectorAll(".categories button");
const products = document.querySelectorAll(".product");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    
    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const category = button.getAttribute("data-category");

    products.forEach(product => {
      if (category === "all" || product.getAttribute("data-category") === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.main-nav ul.nav-links');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('active');
});




