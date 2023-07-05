document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  var nombre = document.getElementById('nombre').value.trim();
  var email = document.getElementById('email').value.trim();
  var telefono = document.getElementById('telefono').value.trim();
  var password = document.getElementById('password').value.trim();

  var alertContainer = document.getElementById('alertContainer');
  alertContainer.innerHTML = '';

  if (nombre === '' || email === '' || telefono === '' || password === '') {
    showAlert('Todos los campos son obligatorios', 'danger');
    return;
  }

  if (!validateEmail(email)) {
    showAlert('Correo electrónico no válido', 'danger');
    return;
  }

  if (!validatePhone(telefono)) {
    showAlert('Teléfono no válido', 'danger');
    return;
  }

  // Resto de validaciones

  showAlert('El formulario se envió correctamente', 'success');
  document.getElementById('formulario').reset();
}

function validateEmail(email) {
  // Expresión regular para validar el correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  // Expresión regular para validar el número de teléfono
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function showAlert(message, type) {
  var alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-' + type;
  alertDiv.innerHTML = message;

  var alertContainer = document.getElementById('alertContainer');
  alertContainer.appendChild(alertDiv);
}