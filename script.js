function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for contacting Segmento! (Form is non-functional)");
}
