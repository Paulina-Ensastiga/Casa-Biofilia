
//==================Formulario=================================
const openModalBtn = document.getElementById('openModalBtn');
const modalForm = document.getElementById('modalForm');
const contactForm = document.getElementById('contactForm');

openModalBtn.addEventListener('click', function() {
  modalForm.style.display = 'flex';
});

window.addEventListener('click', function(event) {
  if (event.target === modalForm) {
    modalForm.style.display = 'none';
  }
});

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Aquí puedes agregar la lógica para enviar el formulario
  modalForm.style.display = 'none';
  alert('Formulario enviado correctamente');
  contactForm.reset();
});
