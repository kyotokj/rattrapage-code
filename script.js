document.addEventListener("DOMContentLoaded", function() {
  // Gestion du burger menu pour la navigation mobile
  const burger = document.getElementById('burger');
  const navUl = document.querySelector('nav ul');
  burger.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });

  // Scrollitelling : utilisation d'IntersectionObserver pour révéler les sections au scroll
  const sections = document.querySelectorAll('.section');
  const options = {
    threshold: 0.3  // La section est considérée visible lorsqu'au moins 30% sont dans la fenêtre
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Pour une animation unique, vous pouvez décommenter la ligne suivante :
        // observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Validation du formulaire de contact
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    formFeedback.textContent = "";
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formFeedback.textContent = "Veuillez remplir tous les champs.";
      formFeedback.style.color = "red";
      return;
    }

    // Vérification simple du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formFeedback.textContent = "Veuillez entrer une adresse email valide.";
      formFeedback.style.color = "red";
      return;
    }

    formFeedback.textContent = "Merci pour votre message !";
    formFeedback.style.color = "green";
    contactForm.reset();
  });
});
