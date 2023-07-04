document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
  
    // Obtener los valores de los campos del formulario
    var productName = document.getElementById("productName").value;
    var productDescription = document.getElementById("productDescription").value;
    var productPrice = document.getElementById("productPrice").value;
    var productImage = document.getElementById("productImage").files[0];
  
    // Crear un objeto FormData para enviar los datos del formulario, incluida la imagen
    var formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productPrice", productPrice);
    formData.append("productImage", productImage);
  
    // Realizar acciones adicionales con los datos del formulario, como enviarlos al servidor
    // Aquí puedes utilizar AJAX, fetch, u otras técnicas para enviar el formulario al servidor
  
    // Por ahora, solo imprimiremos los valores en la consola
    console.log("Nombre del Producto:", productName);
    console.log("Descripción del Producto:", productDescription);
    console.log("Precio del Producto:", productPrice);
    console.log("Imagen del Producto:", productImage);
  
    // Restablecer el formulario
    document.getElementById("productForm").reset();
  });
  