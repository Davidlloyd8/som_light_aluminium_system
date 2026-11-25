const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    contactForm.classList.add("was-validated");
    if (contactForm.checkValidity()) {
      document.getElementById("formAlert")?.classList.remove("d-none");
      contactForm.reset();
      contactForm.classList.remove("was-validated");
    }
  });
}

// Project gallery category filters.
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    document.querySelectorAll(".project-item").forEach((card) => {
      card.classList.toggle(
        "d-none",
        selected !== "all" && card.dataset.category !== selected,
      );
    });
  });
});
