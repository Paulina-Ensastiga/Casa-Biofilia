document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();
  validateProductForm();
});

function validateProductForm() {
  var productName = document.getElementById('productName').value.trim();
  var productDescription = document.getElementById('productDescription').value.trim();
  var productPrice = document.getElementById('productPrice').value.trim();
  var productImage = document.getElementById('productImage').value;

  var alertContainer = document.getElementById('alertContainer');
  alertContainer.innerHTML = '';

  if (productName === '' || productDescription === '' || productPrice === '' || productImage === '') {
    showAlert('Todos los campos son obligatorios', 'danger');
    return;
  }

  // Resto de validaciones

  showAlert('El formulario se envió correctamente', 'success');
  document.getElementById('productForm').reset();
}

function showAlert(message, type) {
  var alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-' + type;
  alertDiv.innerHTML = message;

  var alertContainer = document.getElementById('alertContainer');
  alertContainer.appendChild(alertDiv);
}
