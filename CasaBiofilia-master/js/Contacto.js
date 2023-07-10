//==================Formulario=================================
const openModalBtn = document.getElementById('openModalBtn');
const modalForm = document.getElementById('modalForm');
const contactForm = document.getElementById('contactForm');

// Asignar la función mostrarModal al evento click del botón "Contactanos"
openModalBtn.addEventListener('click', function() {
  modalForm.style.display = 'flex'; // Mostrar el formulario
});

// Asignar la función ocultarModal al evento click en cualquier parte de la ventana
window.addEventListener('click', function(event) {
  if (event.target === modalForm) {
    modalForm.style.display = 'none'; // Ocultar el formulario si se hace clic fuera de él
  }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Limpiar las alertas previas
  document.getElementById('alertContainer').innerHTML = '';

  // Obtener los valores de los campos
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let telefono = document.getElementById('telefono').value;
  let mensaje = document.getElementById('mensaje').value;

  // Validar los campos requeridos
  if (nombre === '' || email === '' || mensaje === '') {
    showAlert('danger', 'Por favor, completa todos los campos.');
    return;
  }

  // Validar el formato del correo electrónico
  if (!validateEmail(email)) {
    showAlert('danger', 'Por favor, ingresa un correo electrónico válido.');
    return;
  }

  // Validar el formato del número de teléfono
  if (!validatePhone(telefono)) {
    showAlert('danger', 'Por favor, ingresa un número de teléfono válido.');
    return;
  }

  // Crear un objeto con los datos del formulario
  let formData = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    mensaje: mensaje
  };

  // Enviar los datos del formulario por correo electrónico utilizando una API
  sendEmail(formData);
});

function validateEmail(email) {
  // Utilizar una expresión regular para validar el formato del correo electrónico
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePhone(phone) {
  // Utilizar una expresión regular para validar el formato del número de teléfono
  let phonePattern = /^\d{10}$/; // Asumiendo un número de teléfono de 10 dígitos
  return phonePattern.test(phone);
}

function sendEmail(formData) {
  // Realizar una solicitud HTTP para enviar los datos del formulario a una API de envío de correo electrónico
  // Asegúrate de reemplazar 'URL_DE_TU_API' con la URL real de tu API de envío de correo electrónico
  fetch('URL_DE_TU_API', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(function(response) {
    if (response.ok) {
      // Mostrar una alerta de éxito si la solicitud se ha realizado correctamente
      showAlert('success', '¡El formulario se ha enviado correctamente!');
      // Limpiar los campos del formulario
      document.getElementById('nombre').value = '';
      document.getElementById('email').value = '';
      document.getElementById('telefono').value = '';
      document.getElementById('mensaje').value = '';
    } else {
      // Mostrar una alerta de error si la solicitud ha fallado
      showAlert('danger', 'Ha ocurrido un error al enviar el formulario. Por favor, intenta nuevamente más tarde.');
    }
  })
  .catch(function(error) {
    // Mostrar una alerta de error si ha ocurrido un error en la solicitud
    showAlert('danger', 'Ha ocurrido un error al enviar el formulario. Por favor, intenta nuevamente más tarde.');
    console.log(error);
  });
}

function showAlert(type, message) {
  // Crear el elemento de alerta
  let alertElement = document.createElement('div');
  alertElement.className = 'alert alert-' + type;
  alertElement.textContent = message;

  // Agregar la alerta al contenedor
  document.getElementById('alertContainer').appendChild(alertElement);
}
