// Buscar producto
function buscarProducto() {
  const input = document.getElementById('buscador');
  const filtro = input.value.toLowerCase();
  const productos = document.querySelectorAll('.producto');
  

  productos.forEach(producto => {
      const nombre = producto.getAttribute('data-nombre').toLowerCase();
      if (nombre.includes(filtro)) {
          producto.style.display = '';
      } else {
          producto.style.display = 'none';
      }
  });
}

// Ver detalles del producto
function verDetalles(imagen) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');

  modal.style.display = 'block';
  modalImg.src = imagen;
}

// Cerrar el modal
function cerrarModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
