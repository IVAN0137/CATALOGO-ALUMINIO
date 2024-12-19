function verDetalles(imagen) {
  // Muestra el modal con la imagen seleccionada
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imagen;
}

function cerrarModal() {
  // Cierra el modal
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function buscarProducto() {
  var input, filter, catalogo, secciones, productos, nombre, i, j;
  input = document.getElementById('buscador');
  filter = input.value.toUpperCase();
  catalogo = document.getElementById('catalogo');
  secciones = catalogo.getElementsByClassName('seccion');

  for (i = 0; i < secciones.length; i++) {
      productos = secciones[i].getElementsByClassName('producto');
      var seccionVisible = false;
      for (j = 0; j < productos.length; j++) {
          nombre = productos[j].getAttribute('data-nombre');
          if (nombre.toUpperCase().indexOf(filter) > -1) {
              productos[j].style.display = "";
              seccionVisible = true;
          } else {
              productos[j].style.display = "none";
          }
      }
      // Si al menos un producto de la sección coincide, mostramos la sección
      secciones[i].style.display = seccionVisible ? "block" : "none";
  }
}
