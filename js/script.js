// === Product Category Filtering ===
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

// === Mobile Nav Toggle ===
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.main-nav ul.nav-links');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('active');
});

// === Scroll Reveal Animation ===
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


document.querySelectorAll('.magnetic').forEach(button => {
  button.addEventListener('mousemove', e => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = `translate(0, 0)`;
  });
});
