// Escucha el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto
  validateForm(); // Llama a la función para validar el formulario
});
// Función para validar el formulario
function validateForm() {
    // Obtiene los valores de los campos del formulario y los trima (elimina los espacios en blanco al inicio y al final)
  let nombre = document.getElementById('nombre').value.trim();
  let email = document.getElementById('email').value.trim();
  let telefono = document.getElementById('telefono').value.trim();
  let password = document.getElementById('password').value.trim();
 // Obtiene el contenedor de las alertas
  let alertContainer = document.getElementById('alertContainer');
  alertContainer.innerHTML = ''; // Limpia el contenido del contenedor de alertas

  
  // Verifica si algún campo está vacío
  if (nombre === '' || email === '' || telefono === '' || password === '') {
    showAlert('Todos los campos son obligatorios', 'danger');
    return;
  }

  // Verifica si algún campo está vacío
  if (!validateEmail(email)) {
    showAlert('Correo electrónico no válido', 'danger');
    return;
  }
  // Verifica si el número de teléfono es válido
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
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  // Expresión regular para validar el número de teléfono
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
// Función para mostrar una alerta en el formulario
function showAlert(message, type) {
  let alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-' + type;
  alertDiv.innerHTML = message;

  let alertContainer = document.getElementById('alertContainer');
  alertContainer.appendChild(alertDiv);
}
